import {TRIPS_NUMBER} from './constants';
import {RenderPosition, render} from './utils';

import {sortItems} from "./mock/sorting";
import {filters} from "./mock/filters";

import {generateTrips} from "./mock/card";
import CardBoard from './components/cards'
import SortComponent from "./components/sorting";
import FilterComponent from "./components/filters";
import TabsComponent from './components/tabs';
import MenuComponent from './components/menu';
import CardComponent from './components/card';
import CardEditComponent from './components/card-edit'

const tripInfo = document.querySelector(`.trip-main__trip-info`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);
const trips = generateTrips(TRIPS_NUMBER);
const cardBoard = new CardBoard().getElement();

render(tripControls, new TabsComponent().getElement(), RenderPosition.AFTERBEGIN);
render(tripEvents, cardBoard, RenderPosition.BEFOREEND);
render(tripEvents, new SortComponent(sortItems).getElement(), RenderPosition.AFTERBEGIN);
render(tripControls, new FilterComponent(filters).getElement(), RenderPosition.BEFOREEND);
render(tripInfo, new MenuComponent(trips[0], trips[trips.length - 1]).getElement(), `afterbegin`);

trips.forEach((trip, index) => render(cardBoard, new CardComponent(trip, index).getElement(), RenderPosition.BEFOREEND));

const tripEventsItem = document.querySelector(`.trip-events__list`);
render(tripEventsItem, new CardEditComponent(trips[0]).getElement(), RenderPosition.AFTERBEGIN);
