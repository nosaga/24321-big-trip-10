import AbstractComponent from './abstract-component';

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


export default class FilterComponent extends AbstractComponent {
  constructor(filter) {
    super();
    this._filter = filter;
  }
  getTemplate() {
    return createFilterTemplate(this._filter);
  }
}
