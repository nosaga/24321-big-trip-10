import {createElement} from '../utils';

const createFiltersMarkup = (filter, isChecked) => {
  return `<div class="trip-filters__filter">
      <input id="filter-${filter}" class="trip-filters__filter-input  visually-hidden" 
        type="radio" 
        name="trip-filter" 
        value="${filter}" 
        ${isChecked ? `checked` : ``}>
      <label class="trip-filters__filter-label" 
      for="filter-${filter}">${filter.toUpperCase()}</label>
    </div>
  `;
};

const createFilterTemplate = (filters) => {
  const filtersMarkup = filters.map((it, i) => createFiltersMarkup(it, !i)).join(`\n`);

  return `<form class="trip-filters" action="#" method="get">
    ${filtersMarkup}
    <button class="visually-hidden" type="submit">Accept filter</button>
  `;
};

export default class FilterComponent {
  constructor(filter) {
    this._filter = filter;
    this._element = null;
  }

  getTemplate() {
    return createFilterTemplate(this._filter);
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
