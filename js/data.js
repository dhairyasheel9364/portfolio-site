const APPS = [
  {
    id: 'about',
    title: 'About Me',
    icon: 'about',
    label: 'About Me',
    width: 500,
    html: `
      <h1>Hi, I'm Dhairyasheel Wangdare</h1>
      <p>I'm a Computer Science Engineering (Data Science) graduate from Kolhapur, Maharashtra, who builds machine learning systems and data analytics projects.</p>
      <p>I've worked on a multimodal ML pipeline at IIT Bombay and a deep learning medical imaging system with Grad-CAM explainability.</p>
      <h2>Quick facts</h2>
      <ul>
        <li><b>Education:</b> B.Tech CSE (Data Science), Dr. D.Y. Patil College of Engineering &amp; Technology, 2026</li>
        <li><b>Experience:</b> Data Science &amp; ML Intern at IIT Bombay</li>
        <li><b>Interests:</b> Deep Learning, Medical AI, Data Analytics</li>
        <li><b>Languages:</b> Hindi, English, Marathi, Deutsch</li>
      </ul>
    `
  },
  {
    id: 'resume',
    title: 'Resume',
    icon: 'resume',
    label: 'Resume',
    width: 460,
    html: `
      <h1>Resume</h1>
      <p>Data Science &amp; ML graduate with experience in deep learning, multimodal ML pipelines and analytics dashboards.</p>
      <a class="btn" href="assets/dhairya_Data_Science_engg.pdf" target="_blank">Open Resume.pdf</a>
      <h2>At a glance</h2>
      <ul>
        <li>B.Tech CSE (Data Science), 2026</li>
        <li>ML Intern, IIT Bombay</li>
        <li>Published: MedDetect AI</li>
      </ul>
    `
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: 'projects',
    label: 'Projects',
    width: 580,
    html: `
      <h1>My Projects</h1>

      <div class="project">
        <h3>MedDetect AI</h3>
        <p>Deep learning web app for multi-class medical image diagnosis on MRI and CT scans, with Grad-CAM visualization to show what the model looks at. Tried several CNN models and reached 95%+ accuracy on large preprocessed image datasets.</p>
        <span class="tag">Python</span><span class="tag">Deep Learning</span><span class="tag">CNN</span><span class="tag">Grad-CAM</span><br>
        <a class="btn" href="https://github.com/dhairyasheel9364/meddetect-AI" target="_blank">GitHub</a>
        <a class="btn" href="https://ijsrem.com/download/meddetect-ai-a-deep-learning-system-for-multi-class-medical-image-diagnosis-with-grad-cam-visualization" target="_blank">Research Paper</a>
      </div>

      <div class="project">
        <h3>E-Commerce Product &amp; Conversion Analytics</h3>
        <p>End-to-end interactive analytics project for e-commerce product and conversion data, with an interactive dashboard.</p>
        <span class="tag">PySpark</span><span class="tag">Pandas</span><span class="tag">Plotly</span><span class="tag">Streamlit</span><span class="tag">Docker</span><br>
        <a class="btn" href="https://github.com/dhairyasheel9364/Large_Ecommerce_Analytics" target="_blank">GitHub</a>
      </div>

      <div class="project">
        <h3>IRCTC Foodie</h3>
        <p>Web platform for food ordering and delivery built for IRCTC travelers and vendors, with a reliable, user-friendly interface.</p>
        <span class="tag">HTML</span><span class="tag">CSS</span><span class="tag">ReactJS</span><span class="tag">TypeScript</span><span class="tag">MySQL</span><br>

      </div>
    `
  },
  {
    id: 'stack',
    title: 'Tech Stack',
    icon: 'stack',
    label: 'Tech Stack',
    width: 540,
    html: `
      <h1>Tech Stack</h1>

      <h2>Programming &amp; Tools</h2>
      <div class="stack-grid">
        <div class="stack-item">Python</div>
        <div class="stack-item">NumPy</div>
        <div class="stack-item">SQL</div>
        <div class="stack-item">Docker</div>
      </div>

      <h2>ML &amp; Data Science</h2>
      <div class="stack-grid">
        <div class="stack-item">Machine Learning</div>
        <div class="stack-item">Deep Learning</div>
        <div class="stack-item">CNN</div>
        <div class="stack-item">Statistical Modeling</div>
        <div class="stack-item">Data Analysis</div>
        <div class="stack-item">ETL</div>
        <div class="stack-item">SDLC</div>
      </div>

      <h2>Data Visualization</h2>
      <div class="stack-grid">
        <div class="stack-item">Power BI</div>
        <div class="stack-item">Tableau</div>
        <div class="stack-item">Excel Dashboards</div>
        <div class="stack-item">Streamlit</div>
      </div>

      <h2>Web Development</h2>
      <div class="stack-grid">
        <div class="stack-item">HTML</div>
        <div class="stack-item">CSS</div>
        <div class="stack-item">TypeScript</div>
      </div>
    `
  },
  {
    id: 'experience',
    title: 'Experience',
    icon: 'experience',
    label: 'Experience',
    width: 540,
    html: `
      <h1>Experience</h1>

      <div class="project">
        <h3>IIT Bombay (Remote)</h3>
        <p><b>Data Science &amp; Machine Learning Intern</b><br>Jul 2025 - Sep 2025</p>
        <p>Built a multimodal machine learning pipeline to detect cognitive load from EEG and GSR data. Implemented signal preprocessing, feature extraction and supervised classification in Python, with interpretable results linking physiological patterns to task difficulty.</p>
        <span class="tag">Python</span><span class="tag">EEG</span><span class="tag">GSR</span><span class="tag">Classification</span><br>
        <a class="btn" href="https://github.com/dhairyasheel9364/IITB-EdTech-Internship-2025" target="_blank">GitHub</a>
      </div>

      <div class="project">
        <h3>Softron (Kolhapur)</h3>
        <p><b>Android Developer Intern</b><br>Mar 2024 - Apr 2024</p>
        <p>Got hands-on experience in Android app development and contributed to design and UI.</p>
        <span class="tag">Android</span><span class="tag">UI Design</span>
      </div>

      <h2>Education</h2>
      <p><b>Dr. D.Y. Patil College of Engineering &amp; Technology</b>, Maharashtra<br>
      Computer Science Engineering (Data Science), 2026<br>
      GPA: 6.72 / 10.00</p>
      <p>Coursework: Data Science, Data Analytics, Data Processing, Dashboards, SDLC, DSA (Python)</p>
    `
  },
  {
    id: 'donotopen',
    title: 'System Error',
    icon: 'projects', 
    label: 'Do Not Open',
    width: 400,
    get html() {
      // First extra popup after 0.5 seconds
      setTimeout(() => {
        const fake1 = document.createElement('div');
        fake1.className = 'window';
        fake1.style = 'width: 350px; left: 10%; top: 20%; position: absolute; z-index: 9999;';
        fake1.innerHTML = `
          <div class="title-bar" style="background: darkred;">
            <span class="title-text" style="color: white;">WARNING</span>
          </div>
          <div class="win-body" style="text-align: center; padding: 20px;">
            <h3 style="color: red;">Deleting System32...</h3>
            <p>I told you not to open this.</p>
          </div>
        `;
        document.body.appendChild(fake1);
      }, 600);

      // Second extra popup after 1.5 seconds
      setTimeout(() => {
        const fake2 = document.createElement('div');
        fake2.className = 'window';
        fake2.style = 'width: 320px; left: 50%; top: 50%; position: absolute; z-index: 10000;';
        fake2.innerHTML = `
          <div class="title-bar" style="background: darkred;">
            <span class="title-text" style="color: white;">FATAL_EXCEPTION</span>
          </div>
          <div class="win-body" style="text-align: center; padding: 20px;">
            <h3 style="color: red;">Uploading browser history...</h3>
            <p>Progress: 99%</p>
          </div>
        `;
        document.body.appendChild(fake2);
      }, 1500);

      // Force the page reload after 3.2 seconds
      setTimeout(() => {
        window.location.reload();
      }, 3200);

      return `
        <div style="text-align: center; padding: 15px;">
          <h1 style="color: red; font-size: 40px; margin-bottom: 10px;">&#9888;</h1>
          <h2 style="color: red;">CRITICAL EXCEPTION</h2>
          <p><b>Error 0x0000007B:</b> Unauthorized Access Detected.</p>
          <p>Why did you click this? Initiating emergency reboot...</p>
        </div>
      `;
    }
  },
  {
    id: 'contact',
    title: 'eMail',
    icon: 'contact',
    label: 'Contact',
    width: 440,
    html: `
      <h1>Contact Me</h1>
      <p><b>Email:</b> <a href="mailto:dhairyasheelwangdare087@gmail.com">dhairyasheelwangdare087@gmail.com</a></p>
      <p><b>GitHub:</b> <a href="https://github.com/dhairyasheel9364" target="_blank">github.com/dhairyasheel9364</a></p>
      <p><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/dhairyaontech/" target="_blank">linkedin.com/in/dhairyaontech</a></p>
      <h2>Send a message</h2>
      <form id="contact-form" action="https://formspree.io/f/xdealykr" method="POST">
        <label>Name<input type="text" name="name" required></label>
        <label>Email<input type="email" name="email" required></label>
        <label>Message<textarea name="message" rows="4" required></textarea></label>
        <button class="btn" type="submit">Send</button>
        <p class="form-status"></p>
      </form>
    `
  },
  {
    id: 'achievements',
    title: 'Achievements',
    icon: 'achievements',
    label: 'Achievements',
    width: 540,
    html: `
      <h1>Achievements</h1>

      <div class="project">
        <h3>Publication: MedDetect AI</h3>
        <p>Developed a Deep Learning System for Multi-Class Medical Image Diagnosis with Grad-CAM Visualization.</p>
        <a class="btn" href="https://ijsrem.com/download/meddetect-ai-a-deep-learning-system-for-multi-class-medical-image-diagnosis-with-grad-cam-visualization" target="_blank">Read Paper</a>
      </div>

      <div class="project">
        <h3>SWAYAM-NPTEL Courses</h3>
        <ul>
          <li>Business Intelligence &amp; Analytics</li>
          <li>Applied Linear Algebra</li>
          <li>Cloud Computing</li>
          <li>Mathematical Foundations for Machine Learning</li>
        </ul>
      </div>

      <div class="project">
        <h3>MetaMorphosis 2K25</h3>
        <p>Completed an intensive Docker and Kubernetes operations workshop by Walchand Linux Users' Group (Feb 2025).</p>
      </div>

      <div class="project">
        <h3>Generative AI Pilot Program</h3>
        <p>Completed participation in GenAI applications.</p>
      </div>
    `
  },
  {
    id: 'trash',
    title: 'Recycle Bin',
    icon: 'trash',
    label: 'Recycle Bin',
    width: 360,
    get html() {
      const jokes = [
        "Contains: 47 overfitted models and 1 CNN that thought every scan was a cat.",
        "Contains: 14 versions of 'Final_Resume_v3_really_final.pdf'.",
        "Contains: A Docker container that worked perfectly on my machine.",
        "Contains: My attempts to center a div without Flexbox.",
        "Contains: A Pandas dataframe with 10,000 missing values I pretended didn't exist.",
        "Contains: print('here 1'), print('here 2'), and console.log('plz work')."
      ];
      
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      
      return `
        <h1>Recycle Bin</h1>
        <p>${randomJoke}</p>
      `;
    }
  }
];