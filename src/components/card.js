import {monthNames} from "../constants";
import {createElement} from '../utils';

const createOffersTemplate = (offer) => {
  return `<li class="event__offer">
      <span class="event__offer-title">${offer.name}</span>
      +
      €&nbsp;<span class="event__offer-price">${offer.price}</span>
     </li>
  `;
};

const createCardTemplate = (trip, index) => {
  const {type, dateFrom, dateTo, basePrice, offers} = trip;
  const startYear = dateFrom.getFullYear();
  const startMonth = monthNames[dateFrom.getMonth()];
  const startMonthDigit = dateFrom.getMonth();
  const startDate = dateFrom.getDate();
  const startHours = dateFrom.getHours();
  const startMinutes = dateFrom.getMinutes();
  const endYear = dateTo.getFullYear();
  const endMonthDigit = dateTo.getMonth();
  const endDate = dateTo.getDate();
  const endHours = dateTo.getHours();
  const endMinutes = dateTo.getMinutes();

  index += 1;

  return `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${index}</span>
        <time class="day__date" datetime="${startYear + `-` + startMonthDigit + `-` + startDate}">${startMonth} ${startDate}</time>
      </div>
      <ul class="trip-events__list">
        <li class="trip-events__item">
          <div class="event">
            <div class="event__type">
              <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
            </div>
            <h3 class="event__title">${type}</h3>
    
            <div class="event__schedule">
              <p class="event__time">
                <time class="event__start-time" datetime="${startYear + `-` + startMonthDigit + `-` + startDate + `T` + startHours + `:` + startMinutes}">${startHours} : ${startMinutes}</time>
                &mdash;
                <time class="event__end-time" datetime="${endYear + `-` + endMonthDigit + `-` + endDate + `T` + endHours + `:` + endMinutes}">${endHours} : ${endMinutes}</time>
              </p>
              <p class="event__duration">${endHours - startHours}H ${endMinutes - endMinutes}M</p>
            </div>
            <p class="event__price">
              €&nbsp;<span class="event__price-value">${basePrice}</span>
            </p>
            <h4 class="visually-hidden">Offers:</h4>
            <ul class="event__selected-offers">
              ${offers.offer.map((item) => item.isChecked === true ? createOffersTemplate((item)) : ``).join(``)}
            </ul>
            <button class="event__rollup-btn" type="button">
              <span class="visually-hidden">Open event</span>
            </button>
          </div>
        </li>
      </ul>
    </li>
 `;
};

export default class CardComponent {
  constructor(offer, index) {
    this._offer = offer;
    this._index = index;
    this._element = null;
  }

  getTemplate() {
    return createCardTemplate(this._offer, this._index);
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
