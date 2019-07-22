import React, {Dispatch, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/ChevronLeft";

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1)
    }
}));

export default function ButtonSizes(props: { date: Date, onClick: (date: Date) => void }) {
    const classes = useStyles();
    let disabled=false;
    let nextDate = new Date(props.date);
    nextDate.setDate(nextDate.getDate() - 7);
    console.log(new Date(),nextDate)
    let startofWeek =new Date()
   startofWeek.setDate(new Date().getDate() - new Date().getDay());

    if ( startofWeek  > nextDate)
        disabled=true;
    function decrementWeek() {
            props.onClick(nextDate)
    }

    return (
        <div>
            <Fab color="secondary" onClick={decrementWeek} aria-label="Add" disabled={disabled}
                 className={classes.margin}>
                <AddIcon fontSize="large"/>
            </Fab>
        </div>
    );
}
