const TRIPS_NUMBER = 3;
const TRIP_EVENTS = document.querySelector(`.trip-events`);
const cities = [`Helsinki`, `Stockholm`, `Amsterdam`, `Paris`];
const photos = new Array(5).fill(``);
const monthNames = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

const tripTypes = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`];
const activityType = [`Check-in`, `Sightseeing`, `Restaurant`];
export {
  TRIPS_NUMBER,
  TRIP_EVENTS,
  cities,
  photos,
  monthNames,
  tripTypes,
  activityType
};
