/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PUBLIC_URL: string;
    REACT_APP_GOOGLE_API_KEY: string;
    REACT_APP_OPENWEATHER_API_KEY: string;
  }
}

type Weather = {
  timeDataForcasted: string;
  temp: number;
  tempFeelsLike: number;
  tempLow: number;
  tempHigh: number;
  description: string;
  descriptionDetail: string;
  icon: string;
};

type City = {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  sunrise: number;
  sunset: number;
  timezone: number;
};

type CityWeather = {
  city: City;
  weather: Weather;
};
