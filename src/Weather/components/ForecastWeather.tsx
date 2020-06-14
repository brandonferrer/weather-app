import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { format } from "date-fns";
import { buildIconClassName } from "../../shared/utils";
import WeatherDetails from "./WeatherDetails";

type Props = {
  fiveDayWeather: Weather[];
  city: City;
};

export default function ForecastWeather({ fiveDayWeather, city }: Props) {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const classes = useStyles();

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <h1>5 Day Forecast</h1>
      {fiveDayWeather.map((item: any, index: number) => {
        const date = new Date((item.timeDataForcasted as any) * 1000);
        const formattedDate = format(date, "ccc, MMM dd");

        return (
          <ExpansionPanel
            expanded={expanded === item.timeDataForcasted}
            onChange={handleChange(item.timeDataForcasted)}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.dateHeading}>
                {formattedDate}
              </Typography>
              <Typography className={classes.secondaryHeading}>
                H: {item.tempHigh}° L: {item.tempLow}° &nbsp; &nbsp;
                <i className={buildIconClassName(item.iconId)} />
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <WeatherDetails
                city={city}
                weather={fiveDayWeather[index]}
                hideHeading
              />
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
    dateHeading: {
      fontSize: theme.typography.pxToRem(18),
      flexBasis: "50%",
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  })
);
