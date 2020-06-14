import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import IconButton from "@material-ui/core/IconButton";
import TuneIcon from "@material-ui/icons/Tune";
import SettingsContent from "./SettingsContent";

export default function SettingsPopover() {
  const classes = useStyles();
  const [element, setElement] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setElement(event.currentTarget);
  };

  const handleClose = () => {
    setElement(null);
  };

  const open = Boolean(element);
  const id = open ? "settings-popover" : undefined;

  return (
    <div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <TuneIcon className={classes.icon} />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={element}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <SettingsContent />
      </Popover>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    icon: {
      color: "#0000008a",
    },
  })
);
