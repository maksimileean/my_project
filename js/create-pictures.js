// eslint-disable-next-line camelcase
import {list_of_photos} from './photo-creation.js';


const pictureTemplate = document.querySelector('#picture').content;
// eslint-disable-next-line camelcase
const photos = list_of_photos;

const picturesList = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

photos.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  fragment.appendChild(pictureElement);
});

picturesList.appendChild(fragment);

export {picturesList};
