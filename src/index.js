import './style.css';

import Hashmap from './hashmap';

const firstNames = [
  'Freddy',
  'Freddo',
  'Momoko',
  'Hitomi',
  'Kyle',
  'Bill',
  'Nadine',
  'Rick',
  'Jennifer',
  'Anthony',
  'Jonny',
];

const lastNames = [
  'Kobayashi',
  'Smith',
  'Rickard',
  'Blobby',
  'Corgan',
  'Winger',
  'Perry',
  'Martino',
  'De La Cruz',
  'Greenwood',
  'Matsuda',
];

function getRangedRandom(min, max) {
  const range = max - min;
  return min + range * Math.random();
}

function getRangedRandomInt(min, max) {
  return Math.round(getRangedRandom(min, max));
}

function generateRandomName() {
  const first = firstNames[getRangedRandomInt(0, firstNames.length - 1)];
  const last = lastNames[getRangedRandomInt(0, lastNames.length - 1)];
  return `${first} ${last}`;
}

const hashmap = new Hashmap();

const maxEntries = 240;
for (let i = 0; i < maxEntries; i += 1) {
  const name = generateRandomName();
  hashmap.set(name, Date.now());
}

// If hashmap is changed before object console log is expanded, the one line summary will stay the same
// but the expanded info will update! So will not give expected result if you check.
console.log('hashmap: ', hashmap);
console.log('entries: ', hashmap.entries());
console.log('   keys: ', hashmap.keys());
console.log(' values: ', hashmap.values());

// Hence the delay to clear the hashmap.
setTimeout(() => {
  hashmap.clear();
  console.log('after clearing: ', hashmap);
}, 5000);
