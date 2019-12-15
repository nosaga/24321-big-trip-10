import {createElement, randomInteger} from "../utils";
import {tripTypes, activityType, cities} from "../constants";

const eventTypeTemplate = (type) => {
  return `
    <div class="event__type-item">
      <input id="event-type-${type.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}">
      <label class="event__type-label  event__type-label--${type.toLowerCase()}" for="event-type-taxi-1">${type}</label>
    </div>
  `;
};

const activityTypeTemplate = (activity) => {
  return `
    <div class="event__type-item">
      <input id="event-type-${activity.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${activity}">
      <label class="event__type-label  event__type-label--${activity.toLowerCase()}" for="event-type-${activity.toLowerCase()}-1">${activity}</label>
    </div>
  `;
};

const offerTypeTemplate = (offerItems) => {
  const {name, value, price, isChecked} = offerItems;
  return `
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${value}-1" type="checkbox" name="event-offer-${value}" ${isChecked ? `checked` : ``}>
      <label class="event__offer-label" for="event-offer-${value}-1">
        <span class="event__offer-title">${name}</span>
        +
        €&nbsp;<span class="event__offer-price">${price}</span>
      </label>
    </div>
  `;
};

const chooseDestination = (city) => {
  return `
    <option value="${city}">${city}</option>
  `;
};

const generateDescription = (description) => {
  return new Array(randomInteger(1, 3)).fill(description[randomInteger(1, 9)]).join(``);
};

const chooseConjunctions = (noun) => {
  return noun === `Sightseeing` || noun === `Restaurant` || noun === `Check-In` ? `in` : `to`;
};

const createCardEditTemplate = (trip) => {
  const {type, destination, offers, basePrice, dateFrom, dateTo} = trip;
  const startYear = dateFrom.getFullYear().toString().substr(2, 2);
  const startMonth = dateFrom.getMonth();
  const startDate = dateFrom.getDate();
  const startHours = dateFrom.getHours();
  const startMinutes = dateFrom.getMinutes();
  const endYear = dateTo.getFullYear().toString().substr(2, 2);
  const endMonth = dateTo.getMonth();
  const endDate = dateTo.getDate();
  const endHours = dateTo.getHours();
  const endMinutes = dateTo.getMinutes();

  return `<li class="trip-events__item">
      <form class="event  event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
  
            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Transfer</legend>
                ${tripTypes.map((item) => eventTypeTemplate(item)).join(``)}
              </fieldset>
  
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Activity</legend>
                ${activityType.map((activity) => activityTypeTemplate(activity)).join(``)}
              </fieldset>
            </div>
          </div>
  
          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${type} ${chooseConjunctions(type)}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination.name}" list="destination-list-1">
            <datalist id="destination-list-1">
              ${cities.map((city) => chooseDestination(city)).join(``)}
            </datalist>
          </div>
  
          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">
              From
            </label>
            <input class="event__input  event__input--time" id="event-start-time-1" 
            type="text" name="event-start-time" value="${startDate + `/` + startMonth + `/` + startYear + ` ` + startHours + `:` + startMinutes}">
            —
            <label class="visually-hidden" for="event-end-time-1">
              To
            </label>
            <input class="event__input  event__input--time" id="event-end-time-1" 
            type="text" name="event-end-time" value="${endDate + `/` + endMonth + `/` + endYear + ` ` + endHours + `:` + endMinutes}">
          </div>
  
          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              €
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
          </div>
  
          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
  
          <input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" checked="">
          <label class="event__favorite-btn" for="event-favorite-1">
            <span class="visually-hidden">Add to favorite</span>
            <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
              <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
            </svg>
          </label>
  
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        <section class="event__details">
          <section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>
            <div class="event__available-offers">
              ${offers.offer.map((item) => offerTypeTemplate(item)).join(``)}
            </div>
          </section>
          <section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${generateDescription(destination.description)}</p>
  
            <div class="event__photos-container">
              <div class="event__photos-tape">
                ${destination.photos[0].src.map((photo) => `
                  <img class="event__photo" src="${photo} + ${Math.random()}" alt="Event photo">
                `).join(``)}
              </div>
            </div>
          </section>
        </section>
      </form>
    </li>
  `;
};


export default class CardEditComponent {
  constructor(trip) {
    this._trip = trip;
    this._element = null;
  }

  getTemplate() {
    return createCardEditTemplate(this._trip);
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
