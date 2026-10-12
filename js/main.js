const desktop = document.getElementById('desktop');
const windowsEl = document.getElementById('windows');
const taskButtons = document.getElementById('task-buttons');
const startBtn = document.getElementById('start-btn');
const startMenu = document.getElementById('start-menu');

let zCounter = 10;
let openCount = 0;
const openWindows = {}; // id -> { win, taskBtn }

/* ---------- Start button ---------- */
startBtn.innerHTML = `${pixelIcon('start', 20)}<span>Start</span>`;

/* ---------- Desktop icons + Start menu ---------- */
APPS.forEach(app => {
  const icon = document.createElement('div');
  icon.className = 'icon';
  icon.tabIndex = 0;
  icon.innerHTML = `${pixelIcon(app.icon, 40)}<span>${app.label}</span>`;
  icon.addEventListener('click', () => openApp(app.id));
  icon.addEventListener('keydown', e => { if (e.key === 'Enter') openApp(app.id); });
  desktop.appendChild(icon);

  const item = document.createElement('button');
  item.innerHTML = `${pixelIcon(app.icon, 20)}<span>${app.label}</span>`;
  item.addEventListener('click', () => { openApp(app.id); startMenu.classList.add('hidden'); });
  startMenu.appendChild(item);
});

startBtn.addEventListener('click', e => {
  e.stopPropagation();
  startMenu.classList.toggle('hidden');
});
document.addEventListener('click', e => {
  if (!startMenu.contains(e.target)) startMenu.classList.add('hidden');
});

/* ---------- Window management ---------- */
function openApp(id) {
  // already open? restore + focus
  if (openWindows[id]) {
    const { win } = openWindows[id];
    win.classList.remove('hidden');
    focusWindow(id);
    return;
  }

  const app = APPS.find(a => a.id === id);
  const win = document.createElement('div');
  win.className = 'window';
  win.style.width = (app.width || 500) + 'px';

  // cascade positions
  const offset = (openCount % 6) * 28;
  win.style.left = Math.min(130 + offset, window.innerWidth - 320) + 'px';
  win.style.top = (30 + offset) + 'px';
  openCount++;

  win.innerHTML = `
    <div class="title-bar">
      <span class="title-text">${pixelIcon(app.icon, 16)}<span>${app.title}</span></span>
      <div class="title-btns">
        <button data-act="min" title="Minimize">_</button>
        <button data-act="max" title="Maximize">&#9633;</button>
        <button data-act="close" title="Close">X</button>
      </div>
    </div>
    <div class="win-body">${app.html}</div>
  `;
  windowsEl.appendChild(win);

  // taskbar button
  const taskBtn = document.createElement('button');
  taskBtn.innerHTML = `${pixelIcon(app.icon, 18)}<span>${app.title}</span>`;
  taskBtn.addEventListener('click', () => {
    const isTop = Number(win.style.zIndex) === zCounter;
    if (win.classList.contains('hidden') || !isTop) {
      win.classList.remove('hidden');
      focusWindow(id);
    } else {
      win.classList.add('hidden');
      taskBtn.classList.remove('active');
    }
  });
  taskButtons.appendChild(taskBtn);

  openWindows[id] = { win, taskBtn };

  // window button actions
  win.querySelector('.title-btns').addEventListener('click', e => {
    const act = e.target.dataset.act;
    if (act === 'close') closeWindow(id);
    if (act === 'min') { win.classList.add('hidden'); taskBtn.classList.remove('active'); }
    if (act === 'max') win.classList.toggle('maximized');
  });

  win.addEventListener('pointerdown', () => focusWindow(id));
  win.querySelector('.title-bar').addEventListener('dblclick', e => {
    if (!e.target.closest('.title-btns')) win.classList.toggle('maximized');
  });

  makeDraggable(win, win.querySelector('.title-bar'));
  focusWindow(id);
}

function focusWindow(id) {
  const { win, taskBtn } = openWindows[id];
  win.style.zIndex = ++zCounter;
  Object.values(openWindows).forEach(w => w.taskBtn.classList.remove('active'));
  taskBtn.classList.add('active');
}

function closeWindow(id) {
  const { win, taskBtn } = openWindows[id];
  win.remove();
  taskBtn.remove();
  delete openWindows[id];
}

/* ---------- Dragging ---------- */
function makeDraggable(win, handle) {
  handle.addEventListener('pointerdown', e => {
    if (e.target.closest('.title-btns') || win.classList.contains('maximized')) return;
    const rect = win.getBoundingClientRect();
    const dx = e.clientX - rect.left;
    const dy = e.clientY - rect.top;
    handle.setPointerCapture(e.pointerId);

    const move = ev => {
      const x = Math.max(0, Math.min(ev.clientX - dx, window.innerWidth - 80));
      const y = Math.max(0, Math.min(ev.clientY - dy, window.innerHeight - 80));
      win.style.left = x + 'px';
      win.style.top = y + 'px';
    };
    const up = () => {
      handle.removeEventListener('pointermove', move);
      handle.removeEventListener('pointerup', up);
    };
    handle.addEventListener('pointermove', move);
    handle.addEventListener('pointerup', up);
  });
}

/* ---------- Clock ---------- */
function updateClock() {
  document.getElementById('clock').textContent =
    new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}
updateClock();
setInterval(updateClock, 1000);

/* ---------- Open About on load ---------- */
/* ---------- Contact form ---------- */
document.addEventListener('submit', async e => {
  const form = e.target.closest('#contact-form');
  if (!form) return;
  e.preventDefault();
  const status = form.querySelector('.form-status');
  status.textContent = 'Sending...';
    try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });
    const data = await res.json().catch(() => ({}));
    console.log('Formspree response:', res.status, data);
    if (res.ok) {
      form.reset();
      status.textContent = 'Message sent. Thank you!';
    } else {
      const msg = data.errors ? data.errors.map(x => x.message).join(', ') : (data.error || 'Unknown error');
      status.textContent = 'Could not send: ' + msg;
    }
  } catch (err) {
    status.textContent = 'Network error. Please email me directly.';
  }
});
/* ---------- Boot sequence ---------- */
function runBoot() {
  const boot = document.getElementById('boot');
  const fill = boot.querySelector('.boot-fill');
  let seen = false;
  try { seen = sessionStorage.getItem('booted'); } catch (e) {}
  if (seen) { boot.remove(); openApp('about'); return; }

  let p = 0;
  const timer = setInterval(() => {
    p += 4 + Math.random() * 8;
    fill.style.width = Math.min(p, 100) + '%';
    if (p >= 100) {
      clearInterval(timer);
      setTimeout(() => {
        boot.remove();
        openApp('about');
        try { sessionStorage.setItem('booted', '1'); } catch (e) {}
      }, 300);
    }
  }, 120);
}
runBoot();