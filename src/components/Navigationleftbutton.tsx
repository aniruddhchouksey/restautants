import React, {Dispatch} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/ChevronLeft";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function ButtonSizes(props:{date:Date,onClick: (date:Date)=>void }) {
  const classes = useStyles();

    function decrementWeek(){
        let nextDate = new Date(props.date);
        nextDate.setDate(nextDate.getDate()-7);
        if(new Date().getSeconds()< nextDate.getSeconds())
        props.onClick(nextDate)
    }
  return (
    <div>
      <Fab color="secondary" onClick={decrementWeek} aria-label="Add" className={classes.margin}>
        <AddIcon fontSize="large" />
      </Fab>
    </div>
  );
}
