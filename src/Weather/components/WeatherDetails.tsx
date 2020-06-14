import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { format } from "date-fns";
import { createRowData } from "../../shared/utils";

type Props = {
  weather: Weather;
  city: City;
  hideHeading?: boolean;
};

export default function WeatherDetails({ weather, city, hideHeading }: Props) {
  const classes = useStyles();

  const {
    tempFeelsLike,
    humidity,
    tempHigh,
    tempLow,
    timeDataForcasted,
  }: any = weather;

  const sunrise = city?.sunrise;
  const sunset = city?.sunset;

  const date = new Date((timeDataForcasted as any) * 1000);
  const formattedDate = format(date, "ccc, MMM dd");

  let rows = [
    createRowData("Feels Like", `${tempFeelsLike}°`),
    createRowData("Humidity", `${humidity}%`),
    createRowData("High Temp", `${tempHigh}°`),
    createRowData("Low Temp", `${tempLow}°`),
  ];

  // Free OpenWeather API does not return sunrise/sunset for days in future
  if (!hideHeading) {
    rows = [
      ...rows,
      createRowData(
        "Sunrise",
        sunrise && new Date(sunrise * 1000).toLocaleTimeString()
      ),
      createRowData(
        "Sunset",
        sunset && new Date(sunset * 1000).toLocaleTimeString()
      ),
    ];
  }

  return (
    <>
      {!hideHeading && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1>Weather Details</h1>
          <Typography className={classes.dateHeading}>
            {formattedDate}
          </Typography>
        </div>
      )}
      <TableContainer component={hideHeading ? "div" : Paper}>
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      width: "100%",
    },
    dateHeading: {
      fontSize: theme.typography.pxToRem(18),
      flexShrink: 0,
    },
  })
);
