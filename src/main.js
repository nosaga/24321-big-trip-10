import {TRIPS_NUMBER} from './constants';
import {RenderPosition, render} from './utils';

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

const renderCard = (cardListElement, trip, index) => {
  const cardComponent = new CardComponent(trip, index);
  const cardEditComponent = new CardEditComponent(trip, index);

  const replaceEditToCard = () => {
    cardListElement.replaceChild(cardComponent.getElement(), cardEditComponent.getElement());
  };

  const replaceCardToEdit = () => {
    cardListElement.replaceChild(cardEditComponent.getElement(), cardComponent.getElement());
  };

  const onEscKeyDown = (evt) => {
    const isEscKey = evt.code === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      replaceEditToCard();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const editButtonElement = cardComponent.getElement().querySelector(`.event__rollup-btn`);
  editButtonElement.addEventListener(`click`, () => {
    replaceCardToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  const editFormElement = cardEditComponent.getElement().querySelector(`form`);
  editFormElement.addEventListener(`submit`, replaceEditToCard);
  render(cardListElement, cardComponent.getElement(), RenderPosition.BEFOREEND);
};

trips.forEach((trip, index) => renderCard(cardBoard, trip, index, RenderPosition.BEFOREEND));
