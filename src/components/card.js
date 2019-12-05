import {monthNames} from "../constants";

export const createCardTemplate = (trip) => {
  const {type, dateFrom, dateTo, basePrice, offers} = trip;
  // const startDate = monthNames[dateFrom.getMonth()];
  // //const endDate = dateTo.getDate();

  return `
    <li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">1</span>
        <time class="day__date" datetime="2019-03-18">${monthNames[0]} 18</time>
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
                
              </p>
              <p class="event__duration">1H 30M</p>
            </div>
    
            <p class="event__price">
              €&nbsp;<span class="event__price-value">${basePrice}</span>
            </p>
    
            <h4 class="visually-hidden">Offers:</h4>
            <ul class="event__selected-offers">
              <li class="event__offer">
                <span class="event__offer-title">${offers.offer.name}</span>
                +
                €&nbsp;<span class="event__offer-price">${offers.offer.price}</span>
               </li>
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
