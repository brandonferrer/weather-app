import React, { useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { get } from "lodash";
import { AppContext } from "../../App/context";
import { buildIconClassName } from "../../shared/utils";

export default function CurrentWeather() {
  const { data } = useContext(AppContext);
  const classes = useStyles();

  // TODO: Don't use lodash and handle ts-ignore
  const name = get(data, "city.name");

  // @ts-ignore
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
