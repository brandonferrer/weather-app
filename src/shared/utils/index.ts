import { kelvinToCelsius } from "./kelvinToCelsius";
import { kelvinToFahrenheit } from "./kelvinToFahrenheit";

export { kelvinToCelsius, kelvinToFahrenheit };

export const MOCK_API_RESPONSE = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1591693200,
      main: {
        temp: 293.98,
        feels_like: 291.3,
        temp_min: 293.98,
        temp_max: 294.93,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1004,
        humidity: 30,
        temp_kf: -0.95,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 1.59,
        deg: 78,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-09 09:00:00",
    },
    {
      dt: 1591704000,
      main: {
        temp: 294.15,
        feels_like: 290.88,
        temp_min: 294.15,
        temp_max: 294.44,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1004,
        humidity: 25,
        temp_kf: -0.29,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.88,
        deg: 67,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-09 12:00:00",
    },
    {
      dt: 1591714800,
      main: {
        temp: 296.75,
        feels_like: 293.51,
        temp_min: 296.75,
        temp_max: 297,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1005,
        humidity: 20,
        temp_kf: -0.25,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.66,
        deg: 60,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-09 15:00:00",
    },
    {
      dt: 1591725600,
      main: {
        temp: 301.64,
        feels_like: 297.88,
        temp_min: 301.64,
        temp_max: 301.71,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1005,
        humidity: 14,
        temp_kf: -0.07,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.21,
        deg: 301,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-09 18:00:00",
    },
    {
      dt: 1591736400,
      main: {
        temp: 302.27,
        feels_like: 296.49,
        temp_min: 302.27,
        temp_max: 302.27,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1004,
        humidity: 14,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.2,
        deg: 309,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-09 21:00:00",
    },
    {
      dt: 1591747200,
      main: {
        temp: 300.75,
        feels_like: 294.42,
        temp_min: 300.75,
        temp_max: 300.75,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1003,
        humidity: 18,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 6.45,
        deg: 317,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-10 00:00:00",
    },
    {
      dt: 1591758000,
      main: {
        temp: 297.9,
        feels_like: 293.51,
        temp_min: 297.9,
        temp_max: 297.9,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1003,
        humidity: 24,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.08,
        deg: 328,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-10 03:00:00",
    },
    {
      dt: 1591768800,
      main: {
        temp: 296.17,
        feels_like: 293.14,
        temp_min: 296.17,
        temp_max: 296.17,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1004,
        humidity: 31,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.71,
        deg: 319,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-10 06:00:00",
    },
    {
      dt: 1591779600,
      main: {
        temp: 295.14,
        feels_like: 293.39,
        temp_min: 295.14,
        temp_max: 295.14,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1002,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.38,
        deg: 321,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-10 09:00:00",
    },
    {
      dt: 1591790400,
      main: {
        temp: 294.59,
        feels_like: 292.82,
        temp_min: 294.59,
        temp_max: 294.59,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1002,
        humidity: 36,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.14,
        deg: 314,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-10 12:00:00",
    },
    {
      dt: 1591801200,
      main: {
        temp: 296.84,
        feels_like: 294.94,
        temp_min: 296.84,
        temp_max: 296.84,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1003,
        humidity: 29,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 0.99,
        deg: 298,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-10 15:00:00",
    },
    {
      dt: 1591812000,
      main: {
        temp: 299.9,
        feels_like: 296.13,
        temp_min: 299.9,
        temp_max: 299.9,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1003,
        humidity: 22,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.31,
        deg: 274,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-10 18:00:00",
    },
    {
      dt: 1591822800,
      main: {
        temp: 300.45,
        feels_like: 296.12,
        temp_min: 300.45,
        temp_max: 300.45,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1002,
        humidity: 24,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.56,
        deg: 280,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-10 21:00:00",
    },
    {
      dt: 1591833600,
      main: {
        temp: 299.6,
        feels_like: 296.19,
        temp_min: 299.6,
        temp_max: 299.6,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1001,
        humidity: 26,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.38,
        deg: 289,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-11 00:00:00",
    },
    {
      dt: 1591844400,
      main: {
        temp: 296.95,
        feels_like: 294.94,
        temp_min: 296.95,
        temp_max: 296.95,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1002,
        humidity: 36,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.15,
        deg: 266,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-11 03:00:00",
    },
    {
      dt: 1591855200,
      main: {
        temp: 295.68,
        feels_like: 294.38,
        temp_min: 295.68,
        temp_max: 295.68,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1003,
        humidity: 40,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.28,
        deg: 285,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-11 06:00:00",
    },
    {
      dt: 1591866000,
      main: {
        temp: 294.98,
        feels_like: 293.68,
        temp_min: 294.98,
        temp_max: 294.98,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1002,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.19,
        deg: 256,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-11 09:00:00",
    },
    {
      dt: 1591876800,
      main: {
        temp: 294.05,
        feels_like: 293.4,
        temp_min: 294.05,
        temp_max: 294.05,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1001,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 0.45,
        deg: 302,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-11 12:00:00",
    },
    {
      dt: 1591887600,
      main: {
        temp: 296.3,
        feels_like: 294.82,
        temp_min: 296.3,
        temp_max: 296.3,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1002,
        humidity: 36,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.2,
        deg: 298,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-11 15:00:00",
    },
    {
      dt: 1591898400,
      main: {
        temp: 299.28,
        feels_like: 295.79,
        temp_min: 299.28,
        temp_max: 299.28,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1003,
        humidity: 27,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.57,
        deg: 255,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-11 18:00:00",
    },
    {
      dt: 1591909200,
      main: {
        temp: 299.49,
        feels_like: 295.67,
        temp_min: 299.49,
        temp_max: 299.49,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1002,
        humidity: 27,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.1,
        deg: 247,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-11 21:00:00",
    },
    {
      dt: 1591920000,
      main: {
        temp: 298.72,
        feels_like: 295.78,
        temp_min: 298.72,
        temp_max: 298.72,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1002,
        humidity: 30,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.11,
        deg: 241,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-12 00:00:00",
    },
    {
      dt: 1591930800,
      main: {
        temp: 295.26,
        feels_like: 294.02,
        temp_min: 295.26,
        temp_max: 295.26,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1002,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.06,
        deg: 234,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-12 03:00:00",
    },
    {
      dt: 1591941600,
      main: {
        temp: 293.87,
        feels_like: 292.8,
        temp_min: 293.87,
        temp_max: 293.87,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1003,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.25,
        deg: 233,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-12 06:00:00",
    },
    {
      dt: 1591952400,
      main: {
        temp: 292.57,
        feels_like: 292.99,
        temp_min: 292.57,
        temp_max: 292.57,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1002,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 74,
      },
      wind: {
        speed: 0.48,
        deg: 199,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-12 09:00:00",
    },
    {
      dt: 1591963200,
      main: {
        temp: 292.12,
        feels_like: 291.92,
        temp_min: 292.12,
        temp_max: 292.12,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1002,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 87,
      },
      wind: {
        speed: 1.38,
        deg: 221,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-12 12:00:00",
    },
    {
      dt: 1591974000,
      main: {
        temp: 292.69,
        feels_like: 292.19,
        temp_min: 292.69,
        temp_max: 292.69,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1003,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 1.94,
        deg: 223,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-12 15:00:00",
    },
    {
      dt: 1591984800,
      main: {
        temp: 294.69,
        feels_like: 293.35,
        temp_min: 294.69,
        temp_max: 294.69,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1003,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 2.6,
        deg: 235,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-12 18:00:00",
    },
    {
      dt: 1591995600,
      main: {
        temp: 295.8,
        feels_like: 293.4,
        temp_min: 295.8,
        temp_max: 295.8,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1002,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 4.05,
        deg: 252,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-12 21:00:00",
    },
    {
      dt: 1592006400,
      main: {
        temp: 295.21,
        feels_like: 292.78,
        temp_min: 295.21,
        temp_max: 295.21,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1001,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 50,
      },
      wind: {
        speed: 4.37,
        deg: 285,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-13 00:00:00",
    },
    {
      dt: 1592017200,
      main: {
        temp: 293.27,
        feels_like: 291.13,
        temp_min: 293.27,
        temp_max: 293.27,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1001,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.32,
        deg: 294,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-13 03:00:00",
    },
    {
      dt: 1592028000,
      main: {
        temp: 291.83,
        feels_like: 290.4,
        temp_min: 291.83,
        temp_max: 291.83,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1002,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.11,
        deg: 283,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-13 06:00:00",
    },
    {
      dt: 1592038800,
      main: {
        temp: 290.97,
        feels_like: 289.89,
        temp_min: 290.97,
        temp_max: 290.97,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1001,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.88,
        deg: 248,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-13 09:00:00",
    },
    {
      dt: 1592049600,
      main: {
        temp: 290.59,
        feels_like: 288.37,
        temp_min: 290.59,
        temp_max: 290.59,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1000,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.26,
        deg: 198,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-13 12:00:00",
    },
    {
      dt: 1592060400,
      main: {
        temp: 291.42,
        feels_like: 289.25,
        temp_min: 291.42,
        temp_max: 291.42,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1000,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.21,
        deg: 189,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-13 15:00:00",
    },
    {
      dt: 1592071200,
      main: {
        temp: 293.74,
        feels_like: 291.07,
        temp_min: 293.74,
        temp_max: 293.74,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1000,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.92,
        deg: 204,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-13 18:00:00",
    },
    {
      dt: 1592082000,
      main: {
        temp: 294.97,
        feels_like: 291.97,
        temp_min: 294.97,
        temp_max: 294.97,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 999,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.96,
        deg: 221,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-13 21:00:00",
    },
    {
      dt: 1592092800,
      main: {
        temp: 294.13,
        feels_like: 292.28,
        temp_min: 294.13,
        temp_max: 294.13,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 998,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.59,
        deg: 249,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-14 00:00:00",
    },
    {
      dt: 1592103600,
      main: {
        temp: 292.35,
        feels_like: 291.16,
        temp_min: 292.35,
        temp_max: 292.35,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 998,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3,
        deg: 256,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-14 03:00:00",
    },
    {
      dt: 1592114400,
      main: {
        temp: 291.23,
        feels_like: 290.52,
        temp_min: 291.23,
        temp_max: 291.23,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 999,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.23,
        deg: 237,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-14 06:00:00",
    },
  ],
  city: {
    id: 5394503,
    name: "Serra Mesa",
    coord: {
      lat: 32.8028,
      lon: -117.1384,
    },
    country: "US",
    timezone: -25200,
    sunrise: 1591620009,
    sunset: 1591671334,
  },
};
