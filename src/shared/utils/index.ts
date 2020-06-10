export const kelvinToFahrenheit = (k: number): number =>
  Math.round((k - 273.15) * 1.8 + 32);

export const kelvinToCelsius = (k: number): number => Math.round(k - 273.15);

export const buildIconClassName = (id: string): string => `wi wi-owm-day-${id}`;

export const createRowData = (name: string, value: any) => ({ name, value });
