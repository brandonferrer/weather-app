# weather-app by Brandon

This is a React web application built in TypeScript that allows users to get the current and 5 day weather forecast for any location.

Features:

- Google Places Autocomplete ensures valid city search/geolocation information 🕵️‍♂️🕵️‍♀️
- API caching to reduce HTTP request and increase application performance 🚀
- View weather in both Celsius and Fahrenheit 🌡
- Set your default weather location so you get your weather faster 🏠
- Clean minimal UI for ease of use 🧼
- Responsive design for easy viewing on mobile devices 📱

## Note: Before Installation

This project has dependencies on third party APIs: [OpenWeather](https://openweathermap.org/appid) and [Google Maps Places](https://developers.google.com/places/web-service/get-api-key). Please obtain API keys before installation.

## Installation

Clone the project

```bash
git clone https://github.com/brandonferrer/weather-app.git
```

Change to project directory and create .env file

```bash
cd weather-app
touch .env
```

Add your OpenWeather and Google Maps Places API keys to .env

```
REACT_APP_GOOGLE_API_KEY="<YOUR_API_KEY>"
REACT_APP_OPENWEATHER_API_KEY="<YOUR_API_KEY>"
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
