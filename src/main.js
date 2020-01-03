import {TRIP_EVENTS, TRIPS_NUMBER} from './constants';
import {RenderPosition, render} from './utils/render';

import {filters} from './mock/filters';
import {generateTrips} from './mock/card';
import CardBoard from './components/cards';
import FilterComponent from './components/filters';
import TabsComponent from './components/tabs';
import MenuComponent from './components/menu';
import TripController from './controllers/trip';

const tripInfo = document.querySelector(`.trip-main__trip-info`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const trips = generateTrips(TRIPS_NUMBER);
const cardBoard = new CardBoard();
render(tripControls, new TabsComponent(), RenderPosition.AFTERBEGIN);
render(TRIP_EVENTS, cardBoard, RenderPosition.BEFOREEND);
render(tripControls, new FilterComponent(filters), RenderPosition.BEFOREEND);
render(tripInfo, new MenuComponent(trips[0], trips[trips.length - 1]), `afterbegin`);

const boardController = new TripController(cardBoard.getElement());
boardController.render(trips);

