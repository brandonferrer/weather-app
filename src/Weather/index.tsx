import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import ForecastWeather from "./components/ForecastWeather";

export default function Weather({ data }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Grow in timeout={400}>
        <Grid container spacing={10} alignItems="center">
          <Grid item xs={12} md={6}>
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
