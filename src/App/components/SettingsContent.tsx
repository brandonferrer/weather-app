import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { AppContext } from "../context";

export default function SettingsContent() {
  const { isFahrenheit, toggleIsFahrenheit } = useContext(AppContext);
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <FormControlLabel
        control={
          <Switch
            checked={isFahrenheit}
            onChange={() => toggleIsFahrenheit(!isFahrenheit)}
            color="primary"
            name="isFahrenheitSwitch"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        }
        label="Display Fahrenheit"
      />
    </Paper>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(1),
      maxWidth: "400px",
      backgroundColor: theme.palette.background.paper,
    },
  })
);
