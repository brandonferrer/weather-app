import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { api, cleanApiResponse } from "../shared/utils/api";
import Spinner from "../shared/components/Spinner";
import CurrentWeather from "../shared/components/CurrentWeather";
import HourlyWeather from "../shared/components/HourlyWeather";
import ForecastWeather from "../shared/components/ForecastWeather";

type Location = {
  lat: number;
  lng: number;
};

export default function Weather() {
  const [data, setData] = useState<CityWeather | null>(null);
  const classes = useStyles();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      getDataByLatLng(location).then((result) =>
        setData(cleanApiResponse(result.data))
      );
    });
  }, []);

  if (!data) return <Spinner />;

  return (
    <div className={classes.wrapper}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <CurrentWeather />
        </Grid>
        <Grid item xs={12} md={6}>
          <HourlyWeather />
        </Grid>
        <Grid item xs={12}>
          <ForecastWeather />
        </Grid>
      </Grid>
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

const getDataByLatLng = async (location: Location): Promise<any> => {
  try {
    const result = await api.get(
      `/data/2.5/forecast?lat=${location.lat}&lon=${location.lng}&appid=22d5369e526133677a0c0402343c0460`
    );

    return result;
  } catch (error) {
    console.log("Error fetching data", error);
  }
};
