import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function ButtonSizes() {
  const classes = useStyles();

  return (
    <div>
      <Fab color="secondary" aria-label="Add" className={classes.margin}>
        <AddIcon fontSize="large" />
      </Fab>
    </div>
  );
}
