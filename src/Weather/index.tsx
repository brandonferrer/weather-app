import React, { useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import { AppContext } from "../App/context";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import ForecastWeather from "./components/ForecastWeather";

export default function Weather() {
  const { data } = useContext(AppContext);
  const classes = useStyles();

  const { city, currentWeather, fiveDayWeather }: any = data;

  return (
    <div className={classes.wrapper}>
      <Grow in timeout={400}>
        <Grid container spacing={10} alignItems="center">
          <Grid item xs={12} md={6}>
            <CurrentWeather city={city} weather={currentWeather} />
          </Grid>
          <Grid item xs={12} md={6}>
            <WeatherDetails city={city} weather={currentWeather} />
          </Grid>
          <Grid item xs={12}>
            <ForecastWeather city={city} fiveDayWeather={fiveDayWeather} />
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
      paddingTop: "1.5rem",
    },
  })
);
