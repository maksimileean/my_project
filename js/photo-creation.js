import { getRandomPositiveInteger } from './get-random-integer.js';

const photo = (i) => ({
  id: i,
  url: `photos${i}.jpg`,
  description: 'Пример описания',
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200)
});

const list_of_photos = Array.from({length: 25}, (a, i) => photo(i));

export {list_of_photos};
