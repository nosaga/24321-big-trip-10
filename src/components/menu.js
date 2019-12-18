import {monthNames} from './../constants';
import {createElement} from '../utils';

const createMenuTemplate = (startPoint, endPoint) => {
  let startMonth = startPoint ? monthNames[startPoint.dateFrom.getMonth()] : ``;
  let startDate = startPoint ? startPoint.dateFrom.getDate() : ``;
  let endMonth = endPoint ? monthNames[endPoint.dateTo.getMonth()] : ``;
  let endDate = endPoint ? endPoint.dateTo.getDate() : ``;

  return `<div class="trip-info__main">
      <h1 class="trip-info__title">${startPoint ? startPoint.destination.name : ``} - ... - ${endPoint ? endPoint.destination.name : ``}</h1>
      <p class="trip-info__dates">${startMonth}&nbsp;${startDate} —&nbsp;${endMonth !== startMonth ? endMonth : ``} ${endDate}</p>
    </div>
  `;
};

export default class MenuComponent {
  constructor(start, end) {
    this._start = start;
    this._end = end;
    this._element = null;
  }

  getTemplate() {
    return createMenuTemplate(this._start, this._end);
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

