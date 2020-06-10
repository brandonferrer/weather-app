import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { createRowData } from "../utils";

type Props = {
  data: CityWeather;
};

const WeatherDetails = ({ data }: Props) => {
  const classes = useStyles();

  const { weather, city } = data;

  const rows = [
    createRowData("Feels Like", `${weather[0].tempFeelsLike}°`),
    createRowData("Humidity", `${weather[0].humidity}%`),
    createRowData("High Temp", `${weather[0].tempHigh}°`),
    createRowData("Low Temp", `${weather[0].tempLow}°`),
    createRowData(
      "Sunrise",
      new Date(city.sunrise * 1000).toLocaleTimeString()
    ),
    createRowData("Sunset", new Date(city.sunset * 1000).toLocaleTimeString()),
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
};

export default WeatherDetails;

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
});
