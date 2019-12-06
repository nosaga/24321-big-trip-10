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
/*import {createCard} from './components/card';*/
import {createCardList} from './components/card-list';
import {createCardEdit} from './components/card-edit';


const tripInfo = document.querySelector(`.trip-main__trip-info`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);

render(tripControls, createTabs(), `afterbegin`);
render(tripEvents, createCardList(), `beforeend`);


render(tripEvents, createSortingTemplate(sortItems), `afterbegin`);
render(tripControls, createFilterTemplate(filters), `beforeend`);

const tripEventsList = document.querySelector(`.trip-days`);
const trips = generateTrips(TRIPS_NUMBER);
console.log(trips[0]);
console.log(trips[trips.length - 1]);
render(tripInfo, createMenuTemplate(trips[0], trips[trips.length - 1]), `afterbegin`);

trips.forEach((trip) => render(tripEventsList, createCardTemplate(trip), `beforeend`));

/*const renderTrips = () => {
  new Array(TRIPS_NUMBER).fill(``).forEach(() => render(tripEventsList, createCardTemplate(card), `beforeend`));
};*/

//renderTrips();
const tripEventsItem = document.querySelector(`.trip-events__list`);
render(tripEventsItem, createCardEdit(), `afterbegin`);
