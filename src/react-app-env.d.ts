/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PUBLIC_URL: string;
    REACT_APP_GOOGLE_API_KEY: string;
    REACT_APP_OPENWEATHER_API_KEY: string;
  }
}

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

interface Data {
  city: City;
  weatherByHour: Weather[];
  currentWeather: Weather;
  fiveDayWeather: Weather[];
}

type LatLng = {
  lat: number;
  lng: number;
};

interface ProviderValues {
  data: Data | null;
  setData: React.Dispatch<React.SetStateAction<Data | null>>;
  searchData: any;
  setSearchData: any;
  isFahrenheit: boolean;
  toggleIsFahrenheit: React.Dispatch<React.SetStateAction<boolean>>;
}

interface PlaceType {
  description: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
    main_text_matched_substrings: [
      {
        offset: number;
        length: number;
      }
    ];
  };
  place_id: string;
}

interface DetailsType {
  formattedAddress: string;
  name: string;
  lat: number;
  lng: number;
}
