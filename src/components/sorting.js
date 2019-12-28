import AbstractComponent from './abstract-component';

export const SortType = {
  TIME_DOWN: `time-down`,
  PRICE_DOWN: `price-down`,
  DEFAULT: `default`
};

const createSortingMarkup = (sort, isChecked) => {
  return `<div class="trip-sort__item  trip-sort__item--time">
      <input id="sort-time" class="trip-sort__input  visually-hidden" 
        type="radio" name="trip-sort" value="sort-${SortType.TIME_DOWN}"
        ${isChecked ? `checked` : ``}>
       
      <label class="trip-sort__btn" for="sort-${sort}">
        ${sort.toUpperCase()}
        <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
          <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
        </svg>
      </label>
    </div>
  `;
};

const createSortingTemplate = (sortItems) => {
  //const sortingMarkup = sortItems.map((it, i) => createSortingMarkup(it, i === 0)).join(`\n`);

  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <span class="trip-sort__item  trip-sort__item--day">Day</span>
      <div class="trip-sort__item  trip-sort__item--event">
        <input id="sort-event" class="trip-sort__input  visually-hidden" 
        type="radio" name="trip-sort" 
        value="sort-event" 
        data-sort-type="${SortType.DEFAULT}"
        checked>
        <label class="trip-sort__btn" for="sort-event">Event</label>
      </div>
      <div class="trip-sort__item  trip-sort__item--time">
        <input id="sort-time" class="trip-sort__input  visually-hidden" 
        type="radio" 
        name="trip-sort" 
        value="sort-time"
        data-sort-type="${SortType.TIME_DOWN}">
        <label class="trip-sort__btn" for="sort-time">
         Time
          <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
            <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
          </svg>
        </label>
      </div>

      <div class="trip-sort__item  trip-sort__item--price">
        <input id="sort-price" 
        class="trip-sort__input visually-hidden" 
        type="radio" 
        name="trip-sort" 
        value="sort-price"
        data-sort-type="${SortType.PRICE_DOWN}">
        <label class="trip-sort__btn" for="sort-price">
          Price
          <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
            <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
          </svg>
        </label>
      </div>
      <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
  </form>`
  );
};

export default class SortComponent extends AbstractComponent {
  constructor(sort) {
    super();
    this._sort = sort;
  }

  getTemplate() {
    return createSortingTemplate(this._sort);
  }

  setSortTypeChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();
      let sortItem = evt.target.previousElementSibling;
      if (sortItem.tagName !== `INPUT`) {
        return;
      }

      const sortType = sortItem.dataset.sortType;
      if (this._currentSortType === sortType) {
        return;
      }

      this._currentSortType = sortType;
      console.log(this._currentSortType);
      handler(this._currentSortType);
    });
  }
}

