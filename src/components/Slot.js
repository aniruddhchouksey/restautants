import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function ButtonSizes() {
  const classes = useStyles();

  return (
    <Paper>
      <Grid container direction={"column"}>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.margin}
          >
            12:00pm
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.margin}
          >
            1:00pm
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.margin}
          >
            2:00pm
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.margin}
          >
            3:00pm
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.margin}
          >
            4:00pm
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.margin}
          >
            5:00pm
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.margin}
          >
            6:00pm
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.margin}
          >
            7:00pm
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.margin}
          >
            8:00pm
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.margin}
          >
            9:00pm
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.margin}
          >
            10:00pm
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.margin}
          >
            11:00pm
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
