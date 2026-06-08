const fs = require('fs');
const path = require('path');

const root = path.resolve('c:/Users/Felix cole/Desktop/Deli Mwitu-web');
const repls = [
  ['Deli Mwitu Restaurant', 'Deli Mwitu Restaurant'],
  ['Deli Mwitu restaurant', 'Deli Mwitu restaurant'],
  ['Maralal Oasis Ground Floor', 'Maralal Oasis Ground Floor'],
  ['Maralal Oasis Ground Floor', 'Maralal Oasis Ground Floor'],
  ['maralal oasis ground floor', 'maralal oasis ground floor'],
  ['maralal oasis ground floor', 'maralal oasis ground floor'],
];

const exts = new Set(['.ts', '.tsx', '.js', '.jsx', '.md', '.json', '.txt']);
const changed = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (entry.isFile() && exts.has(path.extname(entry.name).toLowerCase())) {
      const text = fs.readFileSync(full, 'utf8');
      let next = text;
      for (const [old, rep] of repls) next = next.split(old).join(rep);
      if (next !== text) {
        fs.writeFileSync(full, next, 'utf8');
        changed.push(full);
      }
    }
  }
}

walk(root);
console.log(changed.join('\n'));
