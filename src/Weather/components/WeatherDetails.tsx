import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { get } from "lodash";
import { AppContext } from "../../App/context";
import { createRowData } from "../../shared/utils";

export default function WeatherDetails() {
  const { data } = useContext(AppContext);
  const classes = useStyles();

  // TODO: Don't use lodash
  const weather = get(data, "weather", []);
  const sunrise = get(data, "city.sunrise");
  const sunset = get(data, "city.sunset");

  // TODO: Revisit selecting current weather item
  const rows = [
    createRowData("Feels Like", `${weather[0].tempFeelsLike}°`),
    createRowData("Humidity", `${weather[0].humidity}%`),
    createRowData("High Temp", `${weather[0].tempHigh}°`),
    createRowData("Low Temp", `${weather[0].tempLow}°`),
    createRowData("Sunrise", new Date(sunrise * 1000).toLocaleTimeString()),
    createRowData("Sunset", new Date(sunset * 1000).toLocaleTimeString()),
  ];

  return (
    <>
      <h1>Weather Details</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
});
