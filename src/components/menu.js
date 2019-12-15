import {monthNames} from "./../constants";
import {createElement} from '../utils';

const createMenuTemplate = (startPoint, endPoint) => {
  let startMonth = monthNames[startPoint.dateFrom.getMonth()];
  let startDate = startPoint.dateFrom.getDate();
  let endMonth = monthNames[endPoint.dateTo.getMonth()];
  let endDate = endPoint.dateTo.getDate();

  return `<div class="trip-info__main">
      <h1 class="trip-info__title">${startPoint.destination.name} - ... - ${endPoint.destination.name}</h1>
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

