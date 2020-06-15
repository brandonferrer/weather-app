import React from "react";
import { shallow, configure } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ForecastWeather from "../ForecastWeather";

configure({ adapter: new ReactSixteenAdapter() });

describe("5 Day Forecast", () => {
  const mockFiveDayWeather = [
    {
      description: "Clouds",
      descriptionDetail: "broken clouds",
      humidity: 78,
      icon: "04n",
      iconId: 803,
      temp: 64,
      tempCelsius: 18,
      tempFeelsLike: 63,
      tempFeelsLikeCelsius: 17,
      tempHigh: 64,
      tempHighCelsius: 18,
      tempLow: 64,
      tempLowCelsius: 18,
      timeDataForcasted: 1592308800,
      timeDataForcastedTxt: "2020-06-16 12:00:00",
    },
    {
      description: "Clouds",
      descriptionDetail: "broken clouds",
      humidity: 78,
      icon: "04n",
      iconId: 803,
      temp: 64,
      tempCelsius: 18,
      tempFeelsLike: 63,
      tempFeelsLikeCelsius: 17,
      tempHigh: 64,
      tempHighCelsius: 18,
      tempLow: 64,
      tempLowCelsius: 18,
      timeDataForcasted: 1592308800,
      timeDataForcastedTxt: "2020-06-16 12:00:00",
    },
    {
      description: "Clouds",
      descriptionDetail: "broken clouds",
      humidity: 78,
      icon: "04n",
      iconId: 803,
      temp: 64,
      tempCelsius: 18,
      tempFeelsLike: 63,
      tempFeelsLikeCelsius: 17,
      tempHigh: 64,
      tempHighCelsius: 18,
      tempLow: 64,
      tempLowCelsius: 18,
      timeDataForcasted: 1592308800,
      timeDataForcastedTxt: "2020-06-16 12:00:00",
    },
    {
      description: "Clouds",
      descriptionDetail: "broken clouds",
      humidity: 78,
      icon: "04n",
      iconId: 803,
      temp: 64,
      tempCelsius: 18,
      tempFeelsLike: 63,
      tempFeelsLikeCelsius: 17,
      tempHigh: 64,
      tempHighCelsius: 18,
      tempLow: 64,
      tempLowCelsius: 18,
      timeDataForcasted: 1592308800,
      timeDataForcastedTxt: "2020-06-16 12:00:00",
    },
    {
      description: "Clouds",
      descriptionDetail: "broken clouds",
      humidity: 78,
      icon: "04n",
      iconId: 803,
      temp: 64,
      tempCelsius: 18,
      tempFeelsLike: 63,
      tempFeelsLikeCelsius: 17,
      tempHigh: 64,
      tempHighCelsius: 18,
      tempLow: 64,
      tempLowCelsius: 18,
      timeDataForcasted: 1592308800,
      timeDataForcastedTxt: "2020-06-16 12:00:00",
    },
  ];
  const mockCity = {
    country: "US",
    latitude: 32.7153,
    longitude: -117.1573,
    name: "San Diego",
    sunrise: 1592224827,
    sunset: 1592276289,
    timezone: -25200,
  };
  it("should have 5 expansion panel elements", () => {
    const wrapper = shallow(
      <ForecastWeather fiveDayWeather={mockFiveDayWeather} city={mockCity} />
    );

    expect(wrapper.find(ExpansionPanel)).toHaveLength(5);
  });
});
