import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { buildIconClassName } from "../../shared/utils";

type Props = {
  data: CityWeather;
};

const CurrentWeather = ({ data }: Props) => {
  const classes = useStyles();

  const { name } = data.city;
  const { temp, description, iconId } = data.weather[0];

  return (
    <div className={classes.container}>
      <h1 className={classes.name}>{name}</h1>
      <div className={classes.iconTempWrapper}>
        <h1 className={classes.temp}>
          {temp}&#176; | &nbsp;
          <i className={`${buildIconClassName(iconId)} ${classes.icon}`} />
        </h1>
      </div>
      <h1>{description}</h1>
    </div>
  );
};

export default CurrentWeather;

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
