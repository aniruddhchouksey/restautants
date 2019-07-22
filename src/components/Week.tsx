import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));
export default function ButtonSizes(props: { week: Date[] }) {
  const classes = useStyles();
  let week: Date[] = props.week;
  function formatDate(date: Date) {
    return [
      date.toLocaleString("default", { weekday: "short" }),
      date.toLocaleString("default", { day: "numeric" })
    ];
  }
  const renderWeek = () => {
    let r: JSX.Element[] = [];
    for (let i in week) {
      r.push(
        <Grid key={i}>
          <Fab
            href=""
            color="secondary"
            aria-label="Add"
            className={classes.margin}
          >
            <Grid container direction="column">
              <Grid>{formatDate(week[i])[0]}</Grid>
              <Grid>{formatDate(week[i])[1]}</Grid>
            </Grid>
          </Fab>
        </Grid>
      );
    }
    return r;
  };
  return (
    <Grid container justify="space-around">
      {renderWeek()}
    </Grid>
  );
}
