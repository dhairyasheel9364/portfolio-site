const PALETTE = {
  k: '#1a1a3a', // outline
  w: '#ffffff',
  g: '#c3c0f2', // light lavender
  d: '#6b69a8', // dark lavender
  b: '#3a3ac4', // blue
  l: '#7fb2f5', // light blue
  y: '#f2c94c', // yellow
  o: '#c98a1a', // dark yellow
  r: '#d83a3a', // red
  n: '#4a9a1c'  // green
};

const ICON_GRIDS = {
  about: [
    '................',
    '..kkkkkkkkkkkk..',
    '..kggggggggggk..',
    '..kgbwwbbbbbgk..',
    '..kgbwbbbbbbgk..',
    '..kgbbbbbbbbgk..',
    '..kgbbbbbbbbgk..',
    '..kgllllllllgk..',
    '..kggggggggggk..',
    '..kkkkkkkkkkkk..',
    '.....kddddk.....',
    '.....kddddk.....',
    '...kkkkkkkkkk...',
    '...kggggggggk...',
    '...kkkkkkkkkk...',
    '................'
  ],
  projects: [
    '................',
    '................',
    '..kkkkk.........',
    '.kyyyyyk........',
    '.kyyyyyykkkkkkk.',
    '.kyyyyyyyyyyyyk.',
    '.kywwwwwwwwwwyk.',
    '.kyyyyyyyyyyyyk.',
    '.kyyyyyyyyyyyyk.',
    '.kyyyyyyyyyyyyk.',
    '.kyyyyyyyyyyyyk.',
    '.kooooooooooook.',
    '.kooooooooooook.',
    '.kkkkkkkkkkkkkk.',
    '................',
    '................'
  ],
  stack: [
    '................',
    '................',
    '...kkkkkkkkkk...',
    '..kllllllllllk..',
    '..kbbbbbbbbbbk..',
    '...kkkkkkkkkk...',
    '................',
    '...kkkkkkkkkk...',
    '..kllllllllllk..',
    '..kbbbbbbbbbbk..',
    '...kkkkkkkkkk...',
    '................',
    '...kkkkkkkkkk...',
    '..kllllllllllk..',
    '..kbbbbbbbbbbk..',
    '...kkkkkkkkkk...'
  ],
  experience: [
    '................',
    '................',
    '................',
    '.....kkkkkk.....',
    '.....k....k.....',
    '.....k....k.....',
    '..kkkkkkkkkkkk..',
    '..koooooooooook.',
    '..koooooooooook.',
    '..kkkkyyyykkkk..',
    '..koooooooooook.',
    '..koooooooooook.',
    '..kkkkkkkkkkkk..',
    '................',
    '................',
    '................'
  ],
  achievements: [
    '................',
    '..kkkkkkkkkkkk..',
    '.kkyyyyyyyyyykk.',
    '.kykyyyyyyyykyk.',
    '.kykyywyyyyykyk.',
    '.kkkyywyyyyykkk.',
    '...kyyyyyyyyk...',
    '....kyyyyyyk....',
    '.....koooook....',
    '......kook......',
    '......kook......',
    '.....kkkkkk.....',
    '....kddddddk....',
    '....kddddddk....',
    '....kkkkkkkk....',
    '................'
  ],
  resume: [
    '................',
    '...kkkkkkkk.....',
    '...kwwwwwwkk....',
    '...kwwwwwwkwk...',
    '...kwwwwwwkkkk..',
    '...kwwwwwwwwwk..',
    '...kwbbbbbbwwk..',
    '...kwwwwwwwwwk..',
    '...kwbbbbbbbwk..',
    '...kwwwwwwwwwk..',
    '...kwbbbbbbwwk..',
    '...kwwwwwwwwwk..',
    '...kwbbbbbbbwk..',
    '...kwwwwwwwwwk..',
    '...kkkkkkkkkkk..',
    '................'
  ],
  contact: [
    '................',
    '................',
    '................',
    '................',
    '..kkkkkkkkkkkk..',
    '..kkwwwwwwwwkk..',
    '..kwkwwwwwwkwk..',
    '..kwwkwwwwkwwk..',
    '..kwwwkkkkwwwk..',
    '..kwwwwwwwwwwk..',
    '..kwwwwwwwwwwk..',
    '..kwwwwwwwwwwk..',
    '..kkkkkkkkkkkk..',
    '................',
    '................',
    '................'
  ],
  trash: [
    '................',
    '......kkkk......',
    '..kkkkkkkkkkkk..',
    '..kggggggggggk..',
    '..kkkkkkkkkkkk..',
    '...kgwgwgwgwk...',
    '...kgwgwgwgwk...',
    '...kgwgwgwgwk...',
    '...kgwgwgwgwk...',
    '...kgwgwgwgwk...',
    '...kgwgwgwgwk...',
    '...kgwgwgwgwk...',
    '...kgwgwgwgwk...',
    '...kkkkkkkkkk...',
    '................',
    '................'
  ],
  start: [
    '................',
    '................',
    '.rrrrrr..nnnnnn.',
    '.rrrrrr..nnnnnn.',
    '.rrrrrr..nnnnnn.',
    '.rrrrrr..nnnnnn.',
    '.rrrrrr..nnnnnn.',
    '.rrrrrr..nnnnnn.',
    '................',
    '.bbbbbb..yyyyyy.',
    '.bbbbbb..yyyyyy.',
    '.bbbbbb..yyyyyy.',
    '.bbbbbb..yyyyyy.',
    '.bbbbbb..yyyyyy.',
    '.bbbbbb..yyyyyy.',
    '................'
  ]
};

// Builds an inline SVG from a grid. Adjacent same-colour pixels are merged per row.
function pixelIcon(name, size = 32) {
  const grid = ICON_GRIDS[name];
  if (!grid) return '';
  let rects = '';
  grid.forEach((row, y) => {
    const r = row.padEnd(16, '.').slice(0, 16);
    let x = 0;
    while (x < 16) {
      const c = r[x];
      if (c === '.' || !PALETTE[c]) { x++; continue; }
      let run = 1;
      while (x + run < 16 && r[x + run] === c) run++;
      rects += `<rect x="${x}" y="${y}" width="${run}" height="1" fill="${PALETTE[c]}"/>`;
      x += run;
    }
  });
  return `<svg class="px" width="${size}" height="${size}" viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">${rects}</svg>`;
}