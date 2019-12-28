import CardComponent from '../components/card';
import CardEditComponent from '../components/card-edit';
import {render, RenderPosition, replace} from '../utils/render';
import {SortType} from '../components/sorting';
import SortComponent from '../components/sorting';
import NoPoints from '../components/no-points';

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

const renderCards = (cardListElement, trips) => {
  trips.forEach((trip, index) => {
    renderCard(cardListElement, trip, index);
  });
};

export default class TripController {
  constructor(container) {
    this._container = container;
    this._sortComponent = new SortComponent();
  }

  render(trips) {
    if (trips.length) {
      trips.forEach((trip, index) => renderCard(this._container, trip, index, RenderPosition.BEFOREEND));
    } else {
      render(this._container, new NoPoints(), RenderPosition.BEFOREEND);
    }

    render(this._container, this._sortComponent, RenderPosition.AFTERBEGIN);
    this._sortComponent.setSortTypeChangeHandler((sortType) => {
      let sortedTrips = [];
      console.log(SortType);

      switch (sortType) {
        case SortType.TIME_DOWN:
          console.log(`time`);
          sortedTrips = trips.slice().sort((a, b) => a.startTime - b.startTime);
          break;
        case SortType.PRICE_DOWN:
          console.log(`price`);
          sortedTrips = trips.slice().sort((a, b) => b.basePrice - a.basePrice);
          break;
        case SortType.DEFAULT:
          sortedTrips = trips.length;
          break;
      }

      this._container.children.not(`first-child`).innerHTML = ``;

      renderCards(this._container, sortedTrips);

      //sortedTrips.forEach((trip, index) => renderCard(this._container, trip, index, RenderPosition.BEFOREEND));
    });
  }
}
