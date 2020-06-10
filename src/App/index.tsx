import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import BottomNavigation from "./components/BottomNavigation";
import Weather from "../Weather";
import Settings from "../Settings";

export default function App() {
  const [view, setView] = useState("weather");
  const classes = useStyles();

  let ViewComponent: React.FC = Weather;

  switch (view) {
    case "weather":
      ViewComponent = Weather;
      break;
    case "settings":
      ViewComponent = Settings;
      break;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className={classes.container} maxWidth="lg">
        <div className={classes.viewWrapper}>
          <ViewComponent />
        </div>
        <div className={classes.navWrapper}>
          <BottomNavigation view={view as View} setView={setView} />
        </div>
      </Container>
    </ThemeProvider>
  );
}

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Noto Sans"', '"Helvetica Neue"', "sans-serif"].join(","),
  },
});

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "3rem 1rem",
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
