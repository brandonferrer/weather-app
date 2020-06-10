import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { buildIconClassName } from "../utils";
import { format } from "date-fns";

type Props = {
  data: CityWeather;
};

const ForecastWeather = ({ data }: Props) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const classes = useStyles();

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { weather } = data;

  // Using 12:00 data for 5 day forecast
  const filteredWeather = weather.filter((i) =>
    i.timeDataForcastedTxt.includes("12:00:00")
  );

  return (
    <div className={classes.root}>
      <h1>5 Day Forecast</h1>
      {filteredWeather.map((i) => {
        const date = new Date((i.timeDataForcasted as any) * 1000);
        const formattedDate = format(date, "ccc, MMM dd");

        return (
          <ExpansionPanel
            // timeDataForcasted is unique per item, using as key to expand panel
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
              <Typography>Add weather details here</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </div>
  );
};

export default ForecastWeather;

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
