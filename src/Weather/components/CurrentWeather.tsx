import React, { useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppContext } from "../../App/context";
import { buildIconClassName } from "../../shared/utils";

type Props = {
  weather: Weather;
  city: City;
};

export default function CurrentWeather({ weather, city }: Props) {
  const { isFahrenheit } = useContext(AppContext);
  const classes = useStyles();

  const { temp, tempCelsius, description, iconId }: any = weather;
  const name = city?.name;

  return (
    <div className={classes.container}>
      <h1 className={classes.name}>{name}</h1>
      <div className={classes.iconTempWrapper}>
        <h1 className={classes.temp}>
          {isFahrenheit ? temp : tempCelsius}&#176; | &nbsp;
          <i className={`${buildIconClassName(iconId)} ${classes.icon}`} />
        </h1>
      </div>
      <h1>{description}</h1>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      textAlign: "center",
    },
    name: {
      fontFamily: "Fjalla One",
      fontSize: "3rem",
    },
    temp: {
      fontSize: "3rem",
      margin: 0,
      textAlign: "center",
    },
    icon: {
      fontSize: "3.5rem",
    },
    iconTempWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
  })
);
