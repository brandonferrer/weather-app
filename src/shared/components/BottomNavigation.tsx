import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation as MuiBottomNavigation } from "@material-ui/core";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CloudOutlinedIcon from "@material-ui/icons/CloudOutlined";
import PinDropOutlinedIcon from "@material-ui/icons/PinDropOutlined";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import { View, SetView } from "../../App";

type Props = {
  view: View;
  setView: SetView;
};

export default function BottomNavigation({ view, setView }: Props) {
  const classes = useStyles();

  return (
    <MuiBottomNavigation
      value={view}
      onChange={(event, newValue) => {
        setView(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Weather"
        value="weather"
        icon={<CloudOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Location"
        value="location"
        icon={<PinDropOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Settings"
        value="settings"
        icon={<TuneOutlinedIcon />}
      />
    </MuiBottomNavigation>
  );
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});
