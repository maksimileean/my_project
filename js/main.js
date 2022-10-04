const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
random(2,10);

const lengthCheck = (String, Length) => {
  if (String.length < Length){return true;}
  else{return false;}
};

lengthCheck('Тестовая строка', 50);
