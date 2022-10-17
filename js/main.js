const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
random(2,10);

const lengthCheck = (String, Length) => {
  if (String.length < Length){return true;}
  else{return false;}
};
lengthCheck('Тестовая строка', 50);

//------------------------------------------------------------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const photo = (i) => ({
  id: i,
  url: `photos${i}.jpg`,
  description: 'Пример описания',
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200)
});

// eslint-disable-next-line camelcase
const list_of_photos = Array.from({length: 25}, (a, i) => photo(i));

// eslint-disable-next-line no-console
console.log(list_of_photos);
