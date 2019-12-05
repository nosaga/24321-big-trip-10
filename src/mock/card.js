import {cities, photos} from "../constants";

const generateTrip = () => ({
  basePrice: Math.floor(Math.random() * 1000),
  dateFrom: `2019-07-10T22:55:56.845Z`,
  dateTo: `2019-07-11T11:22:13.375Z`,
  destination: {
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
      `Fusce tristique felis at fermentum pharetra.`,
      `Aliquam id orci ut lectus varius viverra.`,
      `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Sed sed nisi sed augue convallis suscipit in sed felis.`,
      `Aliquam erat volutpat.`,
      `unc fermentum tortor ac porta dapibus.`,
      `In rutrum ac purus sit amet tempus.`
    ],
    name: cities[Math.floor(Math.random() * cities.length)],
    photos: [
      {
        src: photos.map(() => `http://picsum.photos/300/150?r=`),
      }
    ]
  },
  id: Math.floor(Math.random() * 100),
  isFavorite: Boolean(Math.round(Math.random())),
  offers: {
    type: [`Taxi`, `Bus`, `Train`, `Flight`, `Check-in`, `Sightseeing`][Math.floor(Math.random() * 6)],
    offer: [
      {
        name: `Switch to comfort class`,
        price: Math.floor(Math.random() * 250),
        value: `comfort`,
        isChecked: Boolean(Math.round(Math.random())),
      },
      {
        name: `Add luggage`,
        price: 30,
        value: `luggage`,
        isChecked: false,
      },
      {
        name: `Add meal`,
        price: 15,
        value: `meal`,
        isChecked: false,
      },
      {
        name: `Choose seats`,
        price: 5,
        value: `seats`,
        isChecked: Boolean(Math.round(Math.random())),
      },
      {
        name: `Travel by train`,
        price: 40,
        value: `train`,
        isChecked: true,
      }
    ]
  },
  type: [`Taxi`, `Bus`, `Train`, `Flight`, `Check-in`, `Sightseeing`][Math.floor(Math.random() * 6)],
});


const generateTrips = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateTrip);
};

export {generateTrip, generateTrips};
