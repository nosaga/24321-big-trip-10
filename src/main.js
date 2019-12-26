import {TRIPS_NUMBER} from './constants';
import {RenderPosition, render, replace} from './utils/render';

import {sortItems} from './mock/sorting';
import {filters} from './mock/filters';
import {generateTrips} from './mock/card';
import CardBoard from './components/cards';
import SortComponent from './components/sorting';
import FilterComponent from './components/filters';
import TabsComponent from './components/tabs';
import MenuComponent from './components/menu';
import CardComponent from './components/card';
import CardEditComponent from './components/card-edit';
import NoPoints from './components/no-points';

const tripInfo = document.querySelector(`.trip-main__trip-info`);
const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);
const trips = generateTrips(TRIPS_NUMBER);
const cardBoard = new CardBoard();
render(tripControls, new TabsComponent(), RenderPosition.AFTERBEGIN);
render(tripEvents, cardBoard, RenderPosition.BEFOREEND);
render(tripEvents, new SortComponent(sortItems), RenderPosition.AFTERBEGIN);
render(tripControls, new FilterComponent(filters), RenderPosition.BEFOREEND);
render(tripInfo, new MenuComponent(trips[0], trips[trips.length - 1]), `afterbegin`);

const renderCard = (cardListElement, trip, index) => {
  const cardComponent = new CardComponent(trip, index);
  const cardEditComponent = new CardEditComponent(trip, index);
  const replaceEditToCard = () => {
    replace(cardComponent, cardEditComponent);
  };

  const replaceCardToEdit = () => {
    replace(cardEditComponent, cardComponent);
  };

  const onEscKeyDown = (evt) => {
    const isEscKey = evt.code === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      replaceEditToCard();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const editButtonElement = cardComponent.getElement().querySelector(`.event__rollup-btn`);
  const rollupButtonElement = cardEditComponent.getElement().querySelector(`.event__rollup-btn`);
  editButtonElement.addEventListener(`click`, () => {
    replaceCardToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  rollupButtonElement.addEventListener(`click`, () => {
    replaceEditToCard();
  });

  const editFormElement = cardEditComponent.getElement().querySelector(`form`);
  editFormElement.addEventListener(`submit`, replaceEditToCard);
  render(cardListElement, cardComponent, RenderPosition.BEFOREEND);
};

if (trips.length) {
  trips.forEach((trip, index) => renderCard(cardBoard.getElement(), trip, index, RenderPosition.BEFOREEND));
} else {
  render(cardBoard, new NoPoints(), RenderPosition.BEFOREEND);
}
