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

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// eslint-disable-next-line camelcase
const Id_numbers = [];
const testfunc = (massive) => {
  for (let i = 0; i < 25; i++){
    massive[i] = i + 1;
  }
  shuffle(massive);
  return massive;
};
// eslint-disable-next-line no-console
console.log(testfunc(Id_numbers));


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
