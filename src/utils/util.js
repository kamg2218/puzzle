import frenchBulldog from "../assets/image/french-bulldog.jpg";
import retrieverDog from "../assets/image/retriever-dog.jpg";

export const IMAGE_POSITIONS = [
  { x: "1%", y: "1%" },
  { x: "50%", y: "1%" },
  { x: "99%", y: "1%" },
  { x: "1%", y: "50%" },
  { x: "50%", y: "50%" },
  { x: "99%", y: "50%" },
  { x: "1%", y: "99%" },
  { x: "50%", y: "99%" },
  { x: "99%", y: "99%" },
];

export const IMAGE_LIST = [frenchBulldog, retrieverDog];

export const shuffle = (array) => {
  let idx = array.length - 1;
  while (idx > 0) {
    const randomIdx = Math.floor(Math.random() * idx);
    [array[idx], array[randomIdx]] = [array[randomIdx], array[idx]];
    idx--;
  }
  return array;
};

export const getRandomNumber = (maxSize) => {
  return Math.floor(Math.random() * maxSize);
};

export const ITEM_TYPES = {
  draggable: "Draggable",
};
