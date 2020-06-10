import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import { api, cleanApiResponse, getDataByLatLng } from "../shared/utils/api";
import Spinner from "../shared/components/Spinner";
import CurrentWeather from "../shared/components/CurrentWeather";
import WeatherDetails from "../shared/components/WeatherDetails";
import ForecastWeather from "../shared/components/ForecastWeather";
import LocationAutoComplete from "../shared/components/LocationAutoComplete";
import { OPENWEATHER_API_KEY } from "../shared/constants";

export default function Weather() {
  const [data, setData] = useState<CityWeather | null>(null);
  const [searchData, setSearchData] = useState<any>(null);
  const classes = useStyles();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const location: LatLng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      // Weather defaults to users current location on load
      getDataByLatLng(location, api, OPENWEATHER_API_KEY).then((result) =>
        setData(cleanApiResponse(result.data))
      );
    });
  }, []);

  useEffect(() => {
    if (searchData) {
      // Reset data to render spinner
      setData(null);

      const location = {
        lat: searchData.lat,
        lng: searchData.lng,
      };

      getDataByLatLng(location, api, OPENWEATHER_API_KEY).then((result) =>
        setData(cleanApiResponse(result.data))
      );
    }
  }, [searchData]);

  if (!data) return <Spinner />;

  return (
    <div className={classes.wrapper}>
      <Grow in timeout={400}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <LocationAutoComplete setSearchData={setSearchData} />
            <CurrentWeather data={data} />
          </Grid>
          <Grid item xs={12} md={6}>
            <WeatherDetails data={data} />
          </Grid>
          <Grid item xs={12}>
            <ForecastWeather data={data} />
          </Grid>
        </Grid>
      </Grow>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      flexGrow: 1,
    },
  })
);
