const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
random(2,10);

const lengthCheck = (String, Length) => {
  if (String.length < Length){return true;}
  else{return false;}
};
lengthCheck('Тестовая строка', 50);

//------------------------------------------------------------------------------------------------------------------------------------

import {photo} from './photo-creation.js';

// eslint-disable-next-line camelcase
const list_of_photos = Array.from({length: 25}, (a, i) => photo(i));

// eslint-disable-next-line no-console
console.log(list_of_photos);
