import AbstractComponent from './abstract-component';

const cardBoardTemplate = () => `<ul class="trip-days"></ul>`;


export default class CardBoard extends AbstractComponent {
  getElement() {
    return cardBoardTemplate();
  }
}
