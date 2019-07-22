import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function ButtonSizes() {
  const classes = useStyles();

  return (
    <Grid container justify="space-around">
      <Grid items>
        <Fab color="secondary" aria-label="Add" className={classes.margin}>
          date
        </Fab>
      </Grid>
      <Grid items>
        <Fab color="secondary" aria-label="Add" className={classes.margin}>
          date
        </Fab>
      </Grid>
      <Grid items>
        <Fab color="secondary" aria-label="Add" className={classes.margin}>
          date
        </Fab>
      </Grid>
      <Grid items>
        <Fab color="secondary" aria-label="Add" className={classes.margin}>
          date
        </Fab>
      </Grid>
      <Grid items>
        <Fab color="secondary" aria-label="Add" className={classes.margin}>
          date
        </Fab>
      </Grid>
      <Grid items>
        <Fab color="secondary" aria-label="Add" className={classes.margin}>
          date
        </Fab>
      </Grid>
      <Grid items>
        <Fab color="secondary" aria-label="Add" className={classes.margin}>
          date
        </Fab>
      </Grid>
    </Grid>
  );
}
