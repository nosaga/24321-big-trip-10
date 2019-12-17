/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/card-edit.js":
/*!*************************************!*\
  !*** ./src/components/card-edit.js ***!
  \*************************************/
/*! exports provided: createCardEditTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCardEditTemplate", function() { return createCardEditTemplate; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



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
  return new Array(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomInteger"])(1, 3)).fill(description[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["randomInteger"])(1, 9)]).join(``);
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

  return `
    <li class="trip-events__item">
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
                ${_constants__WEBPACK_IMPORTED_MODULE_1__["tripTypes"].map((item) => eventTypeTemplate(item)).join(``)}
              </fieldset>
  
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Activity</legend>
                ${_constants__WEBPACK_IMPORTED_MODULE_1__["activityType"].map((activity) => activityTypeTemplate(activity)).join(``)}
              </fieldset>
            </div>
          </div>
  
          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${type} ${chooseConjunctions(type)}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination.name}" list="destination-list-1">
            <datalist id="destination-list-1">
              ${_constants__WEBPACK_IMPORTED_MODULE_1__["cities"].map((city) => chooseDestination(city)).join(``)}
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


/***/ }),

/***/ "./src/components/card-list.js":
/*!*************************************!*\
  !*** ./src/components/card-list.js ***!
  \*************************************/
/*! exports provided: createCardList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCardList", function() { return createCardList; });
const createCardList = () => `
  <ul class="trip-days"></ul>
`;



/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/*! exports provided: createCardTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCardTemplate", function() { return createCardTemplate; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");


const createOffersTemplate = (offer) => {
  return `
    <li class="event__offer">
      <span class="event__offer-title">${offer.name}</span>
      +
      €&nbsp;<span class="event__offer-price">${offer.price}</span>
     </li>
  `;
};

const createCardTemplate = (trip, index) => {
  const {type, dateFrom, dateTo, basePrice, offers} = trip;
  const startYear = dateFrom.getFullYear();
  const startMonth = _constants__WEBPACK_IMPORTED_MODULE_0__["monthNames"][dateFrom.getMonth()];
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

  return `
    <li class="trip-days__item  day">
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


/***/ }),

/***/ "./src/components/filters.js":
/*!***********************************!*\
  !*** ./src/components/filters.js ***!
  \***********************************/
/*! exports provided: createFilterTemplate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilterTemplate", function() { return createFilterTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilterComponent; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const createFiltersMarkup = (filter, isChecked) => {
  return `
    <div class="trip-filters__filter">
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
  const filtersMarkup = filters.map((it, i) => createFiltersMarkup(it, i === 0)).join(`\n`);

  return (
    `<form class="trip-filters" action="#" method="get">
      ${filtersMarkup}
      <button class="visually-hidden" type="submit">Accept filter</button>
    `
  );
};

class FilterComponent {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/*! exports provided: createMenuTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMenuTemplate", function() { return createMenuTemplate; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../constants */ "./src/constants.js");


const createMenuTemplate = (startPoint, endPoint) => {
  let startMonth = _constants__WEBPACK_IMPORTED_MODULE_0__["monthNames"][startPoint.dateFrom.getMonth()];
  let startDate = startPoint.dateFrom.getDate();
  let endMonth = _constants__WEBPACK_IMPORTED_MODULE_0__["monthNames"][endPoint.dateTo.getMonth()];
  let endDate = endPoint.dateTo.getDate();

  return `
    <div class="trip-info__main">
      <h1 class="trip-info__title">${startPoint.destination.name} - ... - ${endPoint.destination.name}</h1>
      <p class="trip-info__dates">${startMonth}&nbsp;${startDate} —&nbsp;${endMonth !== startMonth ? endMonth : ``} ${endDate}</p>
    </div>
  `;
};




/***/ }),

/***/ "./src/components/sorting.js":
/*!***********************************!*\
  !*** ./src/components/sorting.js ***!
  \***********************************/
/*! exports provided: createSortingTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSortingTemplate", function() { return createSortingTemplate; });
const createSortingMarkup = (sort, isChecked) => {
  return `
    <div class="trip-sort__item  trip-sort__item--time">
      <input id="sort-time" class="trip-sort__input  visually-hidden" 
        type="radio" 
        name="trip-sort" 
        value="sort-${sort}"
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
  const sortingMarkup = sortItems.map((it, i) => createSortingMarkup(it, i === 0)).join(`\n`);

  return (
    `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <span class="trip-sort__item  trip-sort__item--day">Day</span>
        ${sortingMarkup} 
      <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
  </form>`
  );
};


/***/ }),

/***/ "./src/components/tabs.js":
/*!********************************!*\
  !*** ./src/components/tabs.js ***!
  \********************************/
/*! exports provided: createTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTabs", function() { return createTabs; });
const createTabs = () => `
  <nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
    <a class="trip-tabs__btn" href="#">Stats</a>
  </nav>
`;


/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: TRIPS_NUMBER, cities, photos, monthNames, tripTypes, activityType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIPS_NUMBER", function() { return TRIPS_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cities", function() { return cities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "photos", function() { return photos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthNames", function() { return monthNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripTypes", function() { return tripTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityType", function() { return activityType; });
const TRIPS_NUMBER = 3;
const cities = [`Helsinki`, `Stockholm`, `Amsterdam`, `Paris`];
const photos = new Array(5).fill(``);
const monthNames = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

const tripTypes = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`];
const activityType = [`Check-in`, `Sightseeing`, `Restaurant`];



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _mock_sorting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock/sorting */ "./src/mock/sorting.js");
/* harmony import */ var _mock_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock/filters */ "./src/mock/filters.js");
/* harmony import */ var _mock_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock/card */ "./src/mock/card.js");
/* harmony import */ var _components_sorting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sorting */ "./src/components/sorting.js");
/* harmony import */ var _components_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/filters */ "./src/components/filters.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/card */ "./src/components/card.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tabs */ "./src/components/tabs.js");
/* harmony import */ var _components_card_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/card-list */ "./src/components/card-list.js");
/* harmony import */ var _components_card_edit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/card-edit */ "./src/components/card-edit.js");

















const tripInfo = document.querySelector(`.trip-main__trip-info`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);

Object(_utils__WEBPACK_IMPORTED_MODULE_8__["render"])(tripControls, Object(_components_tabs__WEBPACK_IMPORTED_MODULE_9__["createTabs"])(), `afterbegin`);
Object(_utils__WEBPACK_IMPORTED_MODULE_8__["render"])(tripEvents, Object(_components_card_list__WEBPACK_IMPORTED_MODULE_10__["createCardList"])(), `beforeend`);


Object(_utils__WEBPACK_IMPORTED_MODULE_8__["render"])(tripEvents, Object(_components_sorting__WEBPACK_IMPORTED_MODULE_4__["createSortingTemplate"])(_mock_sorting__WEBPACK_IMPORTED_MODULE_1__["sortItems"]), `afterbegin`);

//const filtersElement = new FilterComponent(filters);
Object(_utils__WEBPACK_IMPORTED_MODULE_8__["render"])(tripControls, new _components_filters__WEBPACK_IMPORTED_MODULE_5__["default"](_mock_filters__WEBPACK_IMPORTED_MODULE_2__["filters"]).getElement(), `beforeend`);

const tripEventsList = document.querySelector(`.trip-days`);
const trips = Object(_mock_card__WEBPACK_IMPORTED_MODULE_3__["generateTrips"])(_constants__WEBPACK_IMPORTED_MODULE_0__["TRIPS_NUMBER"]);
Object(_utils__WEBPACK_IMPORTED_MODULE_8__["render"])(tripInfo, Object(_components_menu__WEBPACK_IMPORTED_MODULE_7__["createMenuTemplate"])(trips[0], trips[trips.length - 1]), `afterbegin`);

trips.forEach((trip, index) => Object(_utils__WEBPACK_IMPORTED_MODULE_8__["render"])(tripEventsList, Object(_components_card__WEBPACK_IMPORTED_MODULE_6__["createCardTemplate"])(trip, index), `beforeend`));


const tripEventsItem = document.querySelector(`.trip-events__list`);
Object(_utils__WEBPACK_IMPORTED_MODULE_8__["render"])(tripEventsItem, Object(_components_card_edit__WEBPACK_IMPORTED_MODULE_11__["createCardEditTemplate"])(trips[0]), `afterbegin`);


/***/ }),

/***/ "./src/mock/card.js":
/*!**************************!*\
  !*** ./src/mock/card.js ***!
  \**************************/
/*! exports provided: generateTrip, generateTrips */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTrip", function() { return generateTrip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTrips", function() { return generateTrips; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");


const generateTrip = () => ({
  basePrice: Math.floor(Math.random() * 1000),
  dateFrom: new Date(`2019-07-10T22:55:56.845Z`),
  dateTo: new Date(`2019-07-11T11:22:13.375Z`),
  destination: {
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
      `Fusce tristique felis at fermentum pharetra.`,
      `Aliquam id orci ut lectus varius viverra.`,
      `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Sed sed nisi sed augue convallis suscipit in sed felis.`,
      `Aliquam erat volutpat.`,
      `unc fermentum tortor ac porta dapibus.`,
      `In rutrum ac purus sit amet tempus.`
    ],
    name: _constants__WEBPACK_IMPORTED_MODULE_0__["cities"][Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_0__["cities"].length)],
    photos: [
      {
        src: _constants__WEBPACK_IMPORTED_MODULE_0__["photos"].map(() => `http://picsum.photos/300/150?r=`),
      }
    ]
  },
  id: Math.floor(Math.random() * 100),
  isFavorite: Boolean(Math.round(Math.random())),
  offers: {
    type: [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`][Math.floor(Math.random() * 9)],
    offer: [
      {
        name: `Switch to comfort class`,
        price: Math.floor(Math.random() * 250),
        value: `comfort`,
        isChecked: Boolean(Math.round(Math.random())),
      },
      {
        name: `Add luggage`,
        price: 30,
        value: `luggage`,
        isChecked: false,
      },
      {
        name: `Add meal`,
        price: 15,
        value: `meal`,
        isChecked: false,
      },
      {
        name: `Choose seats`,
        price: 5,
        value: `seats`,
        isChecked: Boolean(Math.round(Math.random())),
      },
      {
        name: `Travel by train`,
        price: 40,
        value: `train`,
        isChecked: true,
      }
    ]
  },
  type: [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`][Math.floor(Math.random() * 9)],
});


const generateTrips = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateTrip);
};




/***/ }),

/***/ "./src/mock/filters.js":
/*!*****************************!*\
  !*** ./src/mock/filters.js ***!
  \*****************************/
/*! exports provided: filters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return filters; });
const filters = [`everything`, `future`, `past`];


/***/ }),

/***/ "./src/mock/sorting.js":
/*!*****************************!*\
  !*** ./src/mock/sorting.js ***!
  \*****************************/
/*! exports provided: sortItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortItems", function() { return sortItems; });
const sortItems = [`event`, `time`, `price`];




/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: render, randomInteger, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInteger", function() { return randomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
}




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map