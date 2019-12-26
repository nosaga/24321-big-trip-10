import AbstractComponent from './abstract-component';

const cardBoardTemplate = () => {
  return (
    `<ul class="trip-days"></ul>`
  );
};


export default class CardBoard extends AbstractComponent {
  getTemplate() {
    return cardBoardTemplate();
  }
}
