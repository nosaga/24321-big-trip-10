import {createElement} from '../utils';

const cardBoardTemplate = () => `<ul class="trip-days"></ul>`;

export default class CardBoard {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return cardBoardTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
