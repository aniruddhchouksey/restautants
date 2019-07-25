import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/ChevronRight";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function ButtonSizes(props: {
  date: Date;
  onClick: (date: Date) => void;
}) {
  const classes = useStyles();

  function incrementWeek() {
    let nextDate = new Date(props.date);
    nextDate.setDate(nextDate.getDate() + 7);
    props.onClick(nextDate);
  }

  return (
    <div>
      <IconButton
        style={{ marginTop: "20%" }}
        color="primary"
        aria-label="Add"
        onClick={incrementWeek}
        className={classes.margin}
      >
        <AddIcon style={{ margin: "0px", fontSize: "3rem" }} fontSize="large" />
      </IconButton>
    </div>
  );
}
