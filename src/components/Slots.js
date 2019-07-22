import React from "react";
import { Grid } from "@material-ui/core";
import Slot from "./Slot";

export default function ButtonSizes() {
  return (
    <Grid container justify="space-around">
      <Grid>
        <Slot />
      </Grid>
      <Grid>
        <Slot />
      </Grid>
      <Grid>
        <Slot />
      </Grid>
      <Grid>
        <Slot />
      </Grid>
      <Grid>
        <Slot />
      </Grid>
      <Grid>
        <Slot />
      </Grid>
      <Grid>
        <Slot />
      </Grid>
    </Grid>
  );
}
