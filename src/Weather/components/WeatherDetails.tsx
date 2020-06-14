import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { createRowData } from "../../shared/utils";

type Props = {
  weather: Weather;
  city: City;
  hideHeading?: boolean;
};

export default function WeatherDetails({ weather, city, hideHeading }: Props) {
  const classes = useStyles();

  const { tempFeelsLike, humidity, tempHigh, tempLow }: any = weather;

  const sunrise = city?.sunrise;
  const sunset = city?.sunset;

  const rows = [
    createRowData("Feels Like", `${tempFeelsLike}°`),
    createRowData("Humidity", `${humidity}%`),
    createRowData("High Temp", `${tempHigh}°`),
    createRowData("Low Temp", `${tempLow}°`),
    createRowData(
      "Sunrise",
      sunrise && new Date(sunrise * 1000).toLocaleTimeString()
    ),
    createRowData(
      "Sunset",
      sunset && new Date(sunset * 1000).toLocaleTimeString()
    ),
  ];

  return (
    <>
      {!hideHeading && <h1>Weather Details</h1>}
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
