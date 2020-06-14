import React, { useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { AppBar as MuiAppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { AppContext } from "../context";
import LocationAutoComplete from "./LocationAutoComplete";
import SettingsPopover from "./SettingsPopover";

export default function AppBar() {
  const { setSearchData, toggleIsFahrenheit } = useContext(AppContext);
  const classes = useStyles();

  return (
    <MuiAppBar position="fixed" elevation={0} className={classes.appBar}>
      <Container maxWidth="lg">
        <Toolbar>
          <SettingsPopover toggleIsFahrenheit={toggleIsFahrenheit} />
          <div className={classes.searchWrapper}>
            <LocationAutoComplete setSearchData={setSearchData} />
          </div>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchWrapper: {
      maxWidth: "400px",
      flex: 1,
    },
    appBar: {
      backgroundColor: "#fafafa",
    },
  })
);
