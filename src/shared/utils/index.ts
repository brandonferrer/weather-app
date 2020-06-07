const MOCK_API_DATA = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1591434000,
      main: {
        temp: 291.5,
        feels_like: 290.85,
        temp_min: 291.5,
        temp_max: 291.96,
        pressure: 1011,
        sea_level: 1010,
        grnd_level: 1005,
        humidity: 75,
        temp_kf: -0.46,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 2.66,
        deg: 225,
      },
      rain: {
        "3h": 0.29,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-06 09:00:00",
    },
    {
      dt: 1591444800,
      main: {
        temp: 291.7,
        feels_like: 290.85,
        temp_min: 291.7,
        temp_max: 291.88,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1006,
        humidity: 74,
        temp_kf: -0.18,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 2.94,
        deg: 264,
      },
      rain: {
        "3h": 0.24,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-06 12:00:00",
    },
    {
      dt: 1591455600,
      main: {
        temp: 291.52,
        feels_like: 290.28,
        temp_min: 291.52,
        temp_max: 291.55,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1008,
        humidity: 77,
        temp_kf: -0.03,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 87,
      },
      wind: {
        speed: 3.71,
        deg: 292,
      },
      rain: {
        "3h": 0.33,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-06 15:00:00",
    },
    {
      dt: 1591466400,
      main: {
        temp: 291.67,
        feels_like: 289.55,
        temp_min: 291.67,
        temp_max: 291.67,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1009,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 78,
      },
      wind: {
        speed: 4.33,
        deg: 266,
      },
      rain: {
        "3h": 0.1,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-06 18:00:00",
    },
    {
      dt: 1591477200,
      main: {
        temp: 292.56,
        feels_like: 289.96,
        temp_min: 292.56,
        temp_max: 292.56,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1008,
        humidity: 61,
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
        all: 33,
      },
      wind: {
        speed: 4.46,
        deg: 252,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-06 21:00:00",
    },
    {
      dt: 1591488000,
      main: {
        temp: 292.7,
        feels_like: 290.52,
        temp_min: 292.7,
        temp_max: 292.7,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1007,
        humidity: 64,
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
        all: 26,
      },
      wind: {
        speed: 4.24,
        deg: 246,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-07 00:00:00",
    },
    {
      dt: 1591498800,
      main: {
        temp: 291.73,
        feels_like: 290.23,
        temp_min: 291.73,
        temp_max: 291.73,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1008,
        humidity: 69,
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
        all: 5,
      },
      wind: {
        speed: 3.37,
        deg: 298,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-07 03:00:00",
    },
    {
      dt: 1591509600,
      main: {
        temp: 291.6,
        feels_like: 289.96,
        temp_min: 291.6,
        temp_max: 291.6,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1008,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 27,
      },
      wind: {
        speed: 3.42,
        deg: 281,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-07 06:00:00",
    },
    {
      dt: 1591520400,
      main: {
        temp: 290.71,
        feels_like: 289.28,
        temp_min: 290.71,
        temp_max: 290.71,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1007,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 29,
      },
      wind: {
        speed: 2.75,
        deg: 245,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-07 09:00:00",
    },
    {
      dt: 1591531200,
      main: {
        temp: 290.27,
        feels_like: 289.26,
        temp_min: 290.27,
        temp_max: 290.27,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1006,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 15,
      },
      wind: {
        speed: 1.97,
        deg: 166,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-07 12:00:00",
    },
    {
      dt: 1591542000,
      main: {
        temp: 291.37,
        feels_like: 290.07,
        temp_min: 291.37,
        temp_max: 291.37,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1007,
        humidity: 63,
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
        speed: 2.34,
        deg: 148,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-07 15:00:00",
    },
    {
      dt: 1591552800,
      main: {
        temp: 293.59,
        feels_like: 291.81,
        temp_min: 293.59,
        temp_max: 293.59,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1007,
        humidity: 54,
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
        speed: 2.93,
        deg: 241,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-07 18:00:00",
    },
    {
      dt: 1591563600,
      main: {
        temp: 295.11,
        feels_like: 291.84,
        temp_min: 295.11,
        temp_max: 295.11,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1006,
        humidity: 49,
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
        speed: 5.04,
        deg: 288,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-07 21:00:00",
    },
    {
      dt: 1591574400,
      main: {
        temp: 294.18,
        feels_like: 290.57,
        temp_min: 294.18,
        temp_max: 294.18,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1005,
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
        speed: 6.36,
        deg: 295,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-08 00:00:00",
    },
    {
      dt: 1591585200,
      main: {
        temp: 293.25,
        feels_like: 290.76,
        temp_min: 293.25,
        temp_max: 293.25,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1005,
        humidity: 52,
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
        speed: 3.59,
        deg: 301,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-08 03:00:00",
    },
    {
      dt: 1591596000,
      main: {
        temp: 292.42,
        feels_like: 291.06,
        temp_min: 292.42,
        temp_max: 292.42,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1007,
        humidity: 58,
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
        speed: 2.32,
        deg: 260,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-08 06:00:00",
    },
    {
      dt: 1591606800,
      main: {
        temp: 291.69,
        feels_like: 291.05,
        temp_min: 291.69,
        temp_max: 291.69,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1006,
        humidity: 65,
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
        speed: 1.73,
        deg: 173,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-08 09:00:00",
    },
    {
      dt: 1591617600,
      main: {
        temp: 291.42,
        feels_like: 290.95,
        temp_min: 291.42,
        temp_max: 291.42,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1006,
        humidity: 61,
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
        speed: 0.98,
        deg: 134,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-08 12:00:00",
    },
    {
      dt: 1591628400,
      main: {
        temp: 292.66,
        feels_like: 291.81,
        temp_min: 292.66,
        temp_max: 292.66,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1008,
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
        speed: 1.05,
        deg: 319,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-08 15:00:00",
    },
    {
      dt: 1591639200,
      main: {
        temp: 296.06,
        feels_like: 292.94,
        temp_min: 296.06,
        temp_max: 296.06,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1008,
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
        speed: 3.47,
        deg: 299,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-08 18:00:00",
    },
    {
      dt: 1591650000,
      main: {
        temp: 298.92,
        feels_like: 294.25,
        temp_min: 298.92,
        temp_max: 298.92,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1008,
        humidity: 28,
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
        speed: 5.32,
        deg: 312,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-08 21:00:00",
    },
    {
      dt: 1591660800,
      main: {
        temp: 298.58,
        feels_like: 293.3,
        temp_min: 298.58,
        temp_max: 298.58,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1007,
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
        speed: 6.41,
        deg: 320,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-09 00:00:00",
    },
    {
      dt: 1591671600,
      main: {
        temp: 297.13,
        feels_like: 293.8,
        temp_min: 297.13,
        temp_max: 297.13,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1008,
        humidity: 34,
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
        speed: 3.8,
        deg: 335,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-09 03:00:00",
    },
    {
      dt: 1591682400,
      main: {
        temp: 296.46,
        feels_like: 294.52,
        temp_min: 296.46,
        temp_max: 296.46,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1010,
        humidity: 35,
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
        speed: 1.77,
        deg: 315,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-09 06:00:00",
    },
    {
      dt: 1591693200,
      main: {
        temp: 295.53,
        feels_like: 294.42,
        temp_min: 295.53,
        temp_max: 295.53,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1009,
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
        speed: 0.58,
        deg: 359,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-09 09:00:00",
    },
    {
      dt: 1591704000,
      main: {
        temp: 295.31,
        feels_like: 292.94,
        temp_min: 295.31,
        temp_max: 295.31,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1010,
        humidity: 26,
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
        speed: 0.94,
        deg: 46,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-09 12:00:00",
    },
    {
      dt: 1591714800,
      main: {
        temp: 297.23,
        feels_like: 294.8,
        temp_min: 297.23,
        temp_max: 297.23,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1011,
        humidity: 20,
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
        speed: 0.57,
        deg: 87,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-09 15:00:00",
    },
    {
      dt: 1591725600,
      main: {
        temp: 301.18,
        feels_like: 297.11,
        temp_min: 301.18,
        temp_max: 301.18,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1011,
        humidity: 15,
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
        speed: 2.77,
        deg: 286,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-09 18:00:00",
    },
    {
      dt: 1591736400,
      main: {
        temp: 302.1,
        feels_like: 295.96,
        temp_min: 302.1,
        temp_max: 302.1,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1010,
        humidity: 15,
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
        speed: 5.87,
        deg: 298,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-09 21:00:00",
    },
    {
      dt: 1591747200,
      main: {
        temp: 301.07,
        feels_like: 295.58,
        temp_min: 301.07,
        temp_max: 301.07,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1009,
        humidity: 19,
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
        speed: 5.49,
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
        temp: 298.74,
        feels_like: 295.03,
        temp_min: 298.74,
        temp_max: 298.74,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1009,
        humidity: 25,
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
        speed: 3.44,
        deg: 327,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-10 03:00:00",
    },
    {
      dt: 1591768800,
      main: {
        temp: 297.55,
        feels_like: 295.19,
        temp_min: 297.55,
        temp_max: 297.55,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1010,
        humidity: 30,
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
        speed: 1.97,
        deg: 337,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-10 06:00:00",
    },
    {
      dt: 1591779600,
      main: {
        temp: 296.27,
        feels_like: 294.1,
        temp_min: 296.27,
        temp_max: 296.27,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1009,
        humidity: 34,
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
        speed: 1.91,
        deg: 330,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-10 09:00:00",
    },
    {
      dt: 1591790400,
      main: {
        temp: 295.68,
        feels_like: 293.71,
        temp_min: 295.68,
        temp_max: 295.68,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1009,
        humidity: 35,
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
        speed: 1.59,
        deg: 337,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-10 12:00:00",
    },
    {
      dt: 1591801200,
      main: {
        temp: 297.59,
        feels_like: 295.36,
        temp_min: 297.59,
        temp_max: 297.59,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1009,
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
        speed: 1.36,
        deg: 332,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-10 15:00:00",
    },
    {
      dt: 1591812000,
      main: {
        temp: 300.84,
        feels_like: 296.78,
        temp_min: 300.84,
        temp_max: 300.84,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1010,
        humidity: 20,
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
        speed: 3.58,
        deg: 299,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-10 18:00:00",
    },
    {
      dt: 1591822800,
      main: {
        temp: 301.17,
        feels_like: 296.13,
        temp_min: 301.17,
        temp_max: 301.17,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1008,
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
        speed: 5.4,
        deg: 291,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-10 21:00:00",
    },
    {
      dt: 1591833600,
      main: {
        temp: 300.19,
        feels_like: 296.31,
        temp_min: 300.19,
        temp_max: 300.19,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1007,
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
        speed: 4.2,
        deg: 300,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2020-06-11 00:00:00",
    },
    {
      dt: 1591844400,
      main: {
        temp: 297.98,
        feels_like: 295.43,
        temp_min: 297.98,
        temp_max: 297.98,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1008,
        humidity: 33,
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
        speed: 2.79,
        deg: 301,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-11 03:00:00",
    },
    {
      dt: 1591855200,
      main: {
        temp: 296.76,
        feels_like: 295.42,
        temp_min: 296.76,
        temp_max: 296.76,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1009,
        humidity: 39,
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
        speed: 1.55,
        deg: 294,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2020-06-11 06:00:00",
    },
  ],
  city: {
    id: 5391811,
    name: "San Diego",
    coord: {
      lat: 32.7153,
      lon: -117.1573,
    },
    country: "US",
    population: 1307402,
    timezone: -25200,
    sunrise: 1591447240,
    sunset: 1591498469,
  },
};
export function getWeatherData(setAppState: any, axios: any): void {
  let data = localStorage.getItem("data");

  if (data) {
    setAppState(data);
  } else {
    data = axios.get();
    setAppState(data);
  }
}

export const kelvinToFahrenheit = (k: number): number =>
  (k - 273.15) * 1.8 + 32;

export const kelvinToCelsius = (k: number): number => k - 273.15;
