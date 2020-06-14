import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { api, cleanApiResponse, getDataByLatLng } from "../shared/utils/api";
import { OPENWEATHER_API_KEY } from "../shared/constants";
import { getDefaultLocation } from "../shared/utils";
import Spinner from "./components/Spinner";
import AppBar from "./components/AppBar";
import Weather from "../Weather";
import { AppProvider } from "./context";

export default function App() {
  const [data, setData] = useState<Data | null>(null);
  const [searchData, setSearchData] = useState<any>(null);
  const [isFahrenheit, toggleIsFahrenheit] = useState(true);
  const classes = useStyles();

  const appProviderValues: ProviderValues = {
    data,
    setData,
    searchData,
    setSearchData,
    isFahrenheit,
    toggleIsFahrenheit,
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // Users current location
      let location: LatLng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      // Users saved default location
      const defaultLocation = getDefaultLocation();

      if (defaultLocation) {
        location = {
          lat: defaultLocation.lat,
          lng: defaultLocation.lng,
        };
      }

      getDataByLatLng(location, api, OPENWEATHER_API_KEY).then((result) =>
        setData(cleanApiResponse(result.data))
      );
    });
  }, []);

  useEffect(() => {
    if (searchData) {
      // Reset data to render spinner
      setData(null);

      const location: LatLng = {
        lat: searchData.lat,
        lng: searchData.lng,
      };

      getDataByLatLng(location, api, OPENWEATHER_API_KEY).then((result) =>
        setData(cleanApiResponse(result.data))
      );
    }
  }, [searchData]);

  return (
    <ThemeProvider theme={theme}>
      <AppProvider providerValues={appProviderValues}>
        <CssBaseline />
        <Container className={classes.container} maxWidth="lg">
          <AppBar />
          <div className={classes.viewWrapper}>
            {data ? <Weather /> : <Spinner />}
          </div>
        </Container>
      </AppProvider>
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
