import React from "react";
import { shallow, configure } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import App from "../index";

configure({ adapter: new ReactSixteenAdapter() });

const API_RESPONSE = {
  city: {
    coord: { lat: 33.767, lon: -118.1892 },
    country: "US",
    id: 5367929,
    name: "Long Beach",
    population: 462257,
    sunrise: 1592138504,
    sunset: 1592190284,
    timezone: -25200,
  },
  cnt: 40,
  cod: "200",
  list: [
    {
      clouds: { all: 10 },
      dt: 1592168400,
      dt_txt: "2020-06-14 21:00:00",
      main: {
        feels_like: 293.35,
        grnd_level: 1011,
        humidity: 57,
        pressure: 1013,
        sea_level: 1012,
        temp: 295,
        temp_kf: 0.14,
        temp_max: 295,
        temp_min: 294.86,
      },
      sys: { pod: "d" },
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
      ],
      wind: { speed: 3.66, deg: 207 },
    },
  ],
};

describe("App", () => {
  let wrapper;
  let useEffect;
  const getWeatherData = jest.fn(() => API_RESPONSE);

  let mockUseEffect = () => {
    useEffect.mockImplementationOnce(() => getWeatherData());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");

    mockUseEffect();
    wrapper = shallow(<App getWeatherData={getWeatherData} />);
  });

  it("should render <App />", () => {
    expect(wrapper).toHaveLength(1);
  });

  it("should call useEffect", () => {
    expect(useEffect).toHaveBeenCalled();
  });

  it("should call getWeatherData", () => {
    expect(getWeatherData).toHaveBeenCalled();
  });
});
