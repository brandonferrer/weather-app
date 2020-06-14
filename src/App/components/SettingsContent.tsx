import React from "react";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useAppContext } from "../context";
import { setDefaultLocation } from "../../shared/utils";

export default function SettingsContent() {
  const { isFahrenheit, toggleIsFahrenheit, searchData } = useAppContext();
  const classes = useStyles();

  const name = searchData?.name;
  const lat = searchData?.lat;
  const lng = searchData?.lng;

  return (
    <Paper className={classes.paper}>
      <FormControlLabel
        control={
          <Switch
            checked={isFahrenheit}
            onChange={() => toggleIsFahrenheit(!isFahrenheit)}
            color="primary"
            name="isFahrenheitSwitch"
          />
        }
        label="Display Fahrenheit"
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.buttonWrapper}
        disabled={!searchData}
        onClick={() => setDefaultLocation(name, lat, lng)}
      >
        Set Default Location
      </Button>
    </Paper>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      maxWidth: "400px",
      backgroundColor: theme.palette.background.paper,
    },
    buttonWrapper: {
      margin: "2rem 0",
    },
  })
);
