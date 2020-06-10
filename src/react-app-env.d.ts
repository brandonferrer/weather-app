/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PUBLIC_URL: string;
    REACT_APP_GOOGLE_API_KEY: string;
    REACT_APP_OPENWEATHER_API_KEY: string;
  }
}

type View = "weather" | "settings";
type SetView = React.Dispatch<React.SetStateAction<string>>;

interface Weather {
  timeDataForcasted: string;
  timeDataForcastedTxt: string;
  temp: number;
  tempFeelsLike: number;
  tempLow: number;
  tempHigh: number;
  tempCelsius: number;
  tempFeelsLikeCelsius: number;
  tempLowCelsius: number;
  tempHighCelsius: number;
  humidity: number;
  description: string;
  descriptionDetail: string;
  icon: string;
  iconId: string;
}

interface City {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

interface CityWeather {
  city: City;
  weather: Weather[];
}

type LatLng = {
  lat: number;
  lng: number;
};
