import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "./components/BottomNavigation";
import Weather from "../Weather";
import Location from "../Location";
import Settings from "../Settings";

export default function App() {
  const [view, setView] = useState("weather");
  const classes = useStyles();

  let ViewComponent: React.FC = Weather;

  switch (view) {
    case "weather":
      ViewComponent = Weather;
      break;
    case "location":
      ViewComponent = Location;
      break;
    case "settings":
      ViewComponent = Settings;
      break;
  }

  return (
    <Container className={classes.container} maxWidth="lg">
      <div className={classes.viewWrapper}>
        <ViewComponent />
      </div>
      <div className={classes.navWrapper}>
        <BottomNavigation view={view as View} setView={setView} />
      </div>
    </Container>
  );
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "3rem 1rem",
    overflow: "hidden",
    height: "100vh",
  },
  viewWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  navWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
