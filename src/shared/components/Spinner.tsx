import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, createStyles } from "@material-ui/core/styles";

export default function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    spinner: {
      height: "90vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);
