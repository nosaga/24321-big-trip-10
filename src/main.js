import {
  TRIPS_NUMBER,
  tripInfo,
  tripControls,
  tripEvents} from './constants';
import {render} from './utils';
import {createMenu} from './components/menu';
import {createTabs} from './components/tabs';
import {createFilters} from './components/filters';
import {createSorting} from './components/sorting';
import {createCard} from './components/card';
import {createCardList} from './components/cardList';
import {createCardEdit} from './components/cardEdit';

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
