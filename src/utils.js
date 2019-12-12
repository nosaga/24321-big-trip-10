const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export {
  render,
  randomInteger
};
