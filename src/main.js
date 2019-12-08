import {
  TRIPS_NUMBER} from './constants';

import {sortItems} from "./mock/sorting";
import {filters} from "./mock/filters";
import {generateTrips} from "./mock/card";
import {createSortingTemplate} from "./components/sorting";
import {createFilterTemplate} from "./components/filters";
import {createCardTemplate} from "./components/card";
import {createMenuTemplate} from './components/menu';


import {render} from './utils';
import {createTabs} from './components/tabs';
import {createCardList} from './components/card-list';
import {createCardEditTemplate} from './components/card-edit';


const tripInfo = document.querySelector(`.trip-main__trip-info`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);

render(tripControls, createTabs(), `afterbegin`);
render(tripEvents, createCardList(), `beforeend`);


render(tripEvents, createSortingTemplate(sortItems), `afterbegin`);
render(tripControls, createFilterTemplate(filters), `beforeend`);

const tripEventsList = document.querySelector(`.trip-days`);
const trips = generateTrips(TRIPS_NUMBER);
render(tripInfo, createMenuTemplate(trips[0], trips[trips.length - 1]), `afterbegin`);

trips.forEach((trip, index) => render(tripEventsList, createCardTemplate(trip, index), `beforeend`));


const tripEventsItem = document.querySelector(`.trip-events__list`);
render(tripEventsItem, createCardEditTemplate(trips[0]), `afterbegin`);
