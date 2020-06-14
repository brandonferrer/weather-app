import React from "react";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

// const SettingsContent = ({ isFar }) => {
//   const classes = useStyles();

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setState({ ...state, [event.target.name]: event.target.checked });
//   };
//   return (
//     <Paper className={classes.paper}>
//       <Switch
//         checked={state.checkedB}
//         onChange={handleChange}
//         color="primary"
//         name="checkedB"
//         inputProps={{ "aria-label": "primary checkbox" }}
//       />
//     </Paper>
//   );
// };

const SettingsContent = () => <h1>Settings</h1>;

export default SettingsContent;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(1),
      maxWidth: "400px",
      backgroundColor: theme.palette.background.paper,
    },
  })
);
