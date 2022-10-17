import { getRandomPositiveInteger } from './get-random-integer.js';

const photo = (i) => ({
  id: i,
  url: `photos${i}.jpg`,
  description: 'Пример описания',
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200)
});

export {photo};
