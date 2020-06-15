import { LOCAL_STORAGE_KEY } from "../constants";

export const kelvinToFahrenheit = (k: number): number =>
  Math.round((k - 273.15) * 1.8 + 32);

export const kelvinToCelsius = (k: number): number => Math.round(k - 273.15);

export const buildIconClassName = (id: string): string => `wi wi-owm-day-${id}`;

export const createRowData = (name: string, value: any) => ({ name, value });

export const setDefaultLocation = async (
  cityName: string,
  lat: number,
  lng: number
): Promise<any> => {
  const key: string = LOCAL_STORAGE_KEY;

  const data: any = {
    cityName,
    lat,
    lng,
  };

  localStorage.setItem(key, JSON.stringify(data));
};

export const getDefaultLocation = () => {
  const key = LOCAL_STORAGE_KEY;
  const data = localStorage.getItem(key);

  return data && JSON.parse(data);
};
