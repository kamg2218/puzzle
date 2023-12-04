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
