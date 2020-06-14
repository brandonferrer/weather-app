import React, { useContext } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { format } from "date-fns";
import { get } from "lodash";
import { AppContext } from "../../App/context";
import { buildIconClassName } from "../../shared/utils";
import WeatherDetails from "./WeatherDetails";

export default function ForecastWeather() {
  const { data } = useContext(AppContext);
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const classes = useStyles();

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  // TODO: Don't use lodash
  const weather = get(data, "weatherByHour", []);

  // TODO: Revisit selecting daily weather item. Using 12:00 data for 5 day forecast
  const filteredWeather = weather.filter((i: any) =>
    i.timeDataForcastedTxt.includes("12:00:00")
  );

  return (
    <div className={classes.root}>
      <h1>5 Day Forecast</h1>
      {filteredWeather.map((i: any) => {
        const date = new Date((i.timeDataForcasted as any) * 1000);
        const formattedDate = format(date, "ccc, MMM dd");

        return (
          <ExpansionPanel
            expanded={expanded === i.timeDataForcasted}
            onChange={handleChange(i.timeDataForcasted)}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                {formattedDate}
              </Typography>
              <Typography className={classes.secondaryHeading}>
                H: {i.tempHigh}° L: {i.tempLow}° &nbsp; &nbsp;
                <i className={buildIconClassName(i.iconId)} />
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <WeatherDetails hideHeading />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginBottom: "2rem",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "50%",
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  })
);
