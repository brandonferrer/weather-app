import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "./components/BottomNavigation";
import Weather from "./Weather";
import Location from "./Location";
import Settings from "./Settings";

export type View = "weather" | "location" | "settings";
export type SetView = React.Dispatch<React.SetStateAction<string>>;

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
    <Container className={classes.container} maxWidth="sm">
      <ViewComponent />
      <BottomNavigation view={view as View} setView={setView} />
    </Container>
  );
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
