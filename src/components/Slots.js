import React from "react";
import { Grid } from "@material-ui/core";
import Slot from "./Slot";

export default function ButtonSizes() {
  return (
    <Grid container justify="space-around">
      <Grid style={{ width: "14%" }}>
        <Slot />
      </Grid>
      <Grid style={{ width: "14%" }}>
        <Slot />
      </Grid>
      <Grid style={{ width: "14%" }}>
        <Slot />
      </Grid>
      <Grid style={{ width: "14%" }}>
        <Slot />
      </Grid>
      <Grid style={{ width: "14%" }}>
        <Slot />
      </Grid>
      <Grid style={{ width: "14%" }}>
        <Slot />
      </Grid>
      <Grid style={{ width: "14%" }}>
        <Slot />
      </Grid>
    </Grid>
  );
}
