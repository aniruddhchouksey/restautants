import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));
export default function ButtonSizes(props:{week:Date[]}){
  const classes = useStyles();
    let week :Date[]=props.week;
  function formatDate(date:Date){
      return date.toLocaleString('default',{day:'numeric',weekday:'short'})
  }
  const renderWeek=()=>{
      let r : JSX.Element [] =[] ;
      for (let i in week){
          r.push(
              <Grid key={i}>
                  <Fab href="" color="secondary" aria-label="Add" className={classes.margin}>
                      {formatDate(week[i])}
                  </Fab>
              </Grid>
          )
      }
      return r
  };
  return (
    <Grid container justify="space-around">
    {renderWeek()}
    </Grid>
  );
}
