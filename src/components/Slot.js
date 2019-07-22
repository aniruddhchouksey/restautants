import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function ButtonSizes() {
  const classes = useStyles();

  return (
    <Grid container direction={"column"}>
      <Grid items>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.margin}
        >
          Large
        </Button>
      </Grid>
      <Grid items>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.margin}
        >
          Large
        </Button>
      </Grid>
      <Grid items>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.margin}
        >
          Large
        </Button>
      </Grid>
      <Grid items>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.margin}
        >
          Large
        </Button>
      </Grid>
      <Grid items>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.margin}
        >
          Large
        </Button>
      </Grid>
      <Grid items>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.margin}
        >
          Large
        </Button>
      </Grid>
      <Grid items>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.margin}
        >
          Large
        </Button>
      </Grid>
      <Grid items>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.margin}
        >
          Large
        </Button>
      </Grid>
      <Grid items>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.margin}
        >
          Large
        </Button>
      </Grid>
      <Grid items>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.margin}
        >
          Large
        </Button>
      </Grid>
      <Grid items>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.margin}
        >
          Large
        </Button>
      </Grid>
      <Grid items>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.margin}
        >
          Large
        </Button>
      </Grid>
    </Grid>
  );
}
