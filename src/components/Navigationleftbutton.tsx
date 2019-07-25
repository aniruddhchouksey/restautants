import React, { Dispatch, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/ChevronLeft";
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
  let disabled = false;
  let nextDate = new Date(props.date);
  nextDate.setDate(nextDate.getDate() - 7);
  console.log(new Date(), nextDate);
  let startofWeek = new Date();
  startofWeek.setDate(new Date().getDate() - new Date().getDay());

  if (startofWeek > nextDate) disabled = true;
  function decrementWeek() {
    props.onClick(nextDate);
  }

  return (
    <div>
      <IconButton
        color="primary"
        onClick={decrementWeek}
        aria-label="Add"
        disabled={disabled}
        className={classes.margin}
      >
        <AddIcon
          style={{ margin: "0px", fontSize: "3rem", marginTop: "26%" }}
          fontSize="large"
        />
      </IconButton>
    </div>
  );
}
