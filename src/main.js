import {
  TRIPS_NUMBER} from './constants';
import {render} from './utils';
import {createMenu} from './components/menu';
import {createTabs} from './components/tabs';
import {createFilters} from './components/filters';
import {createSorting} from './components/sorting';
import {createCard} from './components/card';
import {createCardList} from './components/card-list';
import {createCardEdit} from './components/card-edit';

const tripInfo = document.querySelector(`.trip-main__trip-info`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);

render(tripInfo, createMenu(), `afterbegin`);
render(tripControls, createTabs(), `afterbegin`);
render(tripControls, createFilters(), `beforeend`);
render(tripEvents, createSorting(), `afterbegin`);
render(tripEvents, createCardList(), `beforeend`);

const tripEventsList = document.querySelector(`.trip-days`);

const renderTrips = () => {
  new Array(TRIPS_NUMBER).fill(``).forEach(() => render(tripEventsList, createCard(), `beforeend`));
};

renderTrips();
const tripEventsItem = document.querySelector(`.trip-events__list`);
render(tripEventsItem, createCardEdit(), `afterbegin`);
