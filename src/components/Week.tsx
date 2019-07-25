import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import { Grid, IconButton, Box } from "@material-ui/core";

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
        <Grid key={i} style={{ width: "14%" }}>
          <Grid>{formatDate(week[i])[0]}</Grid>
          <IconButton
            style={{ marginTop: "0px", padding: "8px" }}
            href=""
            color="primary"
            size="medium"
            aria-label="Add"
            className={classes.margin}
          >
            <Grid>
              <Box fontSize="h4.fontSize" fontWeight="bold">
                {formatDate(week[i])[1]}
              </Box>
            </Grid>
          </IconButton>
        </Grid>
      );
    }
    return r;
  };
  return (
    <Grid container justify="space-between">
      {renderWeek()}
    </Grid>
  );
}
