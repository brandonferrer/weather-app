import localforage from "localforage";
import memoryDriver from "localforage-memoryStorageDriver";
import { setup } from "axios-cache-adapter";

// Register custom memoryDriver to localforage
localforage.defineDriver(memoryDriver);

// Create localforage instance
const localforageStore = localforage.createInstance({
  // List of drivers used
  driver: [
    localforage.INDEXEDDB,
    localforage.LOCALSTORAGE,
    memoryDriver._driver,
  ],
  // Prefix all storage keys to prevent conflicts
  name: "weather-cache",
});

// My axios instance
export const api = setup({
  baseURL: "https://api.openweathermap.org",
  cache: {
    maxAge: 60 * 60 * 1000, // Set cache time to 1 hour
    exclude: { query: false }, // Cache requests with query parameters
    store: localforageStore, // Pass localforage store to axios-cache-adapter
  },
});

// Utility to shape reponse data
export const cleanApiResponse = (data: any): CityWeather => ({
  city: {
    name: data.city.name,
    country: data.city.country,
    latitude: data.city.coord.lat,
    longitude: data.city.coord.lon,
    sunrise: data.city.sunrise,
    sunset: data.city.sunset,
    timezone: data.city.timezone,
  },
  weather: data.list.map((i) => ({
    timeDataForcasted: i.dt,
    temp: i.main.temp,
    tempFeelsLike: i.main.feels_like,
    tempLow: i.main.temp_min,
    tempHigh: i.main.temp_max,
    description: i.weather[0].main,
    descriptionDetail: i.weather[0].description,
    icon: i.weather[0].icon,
  })),
});
