import React from "react";
import { Grid, Paper, TextField } from "@material-ui/core";
import Restaurantcard from "./components/Restaurantcard";
import DateFnsUtils from "@date-io/date-fns";
import {
  BasePicker,
  MuiPickersUtilsProvider,
  Calendar
} from "material-ui-pickers";
import Navigationlefttbutton from "./components/Navigationleftbutton";
import Week from "./components/Week";
import Slots from "./components/Slots";
import Navigationrightbutton from "./components/Navigationrightbutton";
import "./App.css";

const App: React.FC = () => {
  let [selectedDate, handleDateChange] = React.useState(new Date());
  const returnWeek = () => {
    let r: Date[] = [];
    let startOfWeek = new Date(selectedDate);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    r.push(new Date(startOfWeek));
    for (let i = 0; i < 6; i++) {
      startOfWeek.setDate(startOfWeek.getDate() + 1);
      r.push(new Date(startOfWeek));
    }
    return r;
  };
  return (
    <div className="App">
      <Grid container spacing={0} style={{ margin: "20dp" }}>
        <Grid item sm={3} className="col1">
          <Restaurantcard />
          <TextField
            id="outlined-number"
            label="Number of people"
            // value={values.age}
            // onChange={handleChange('age')}
            type="number"
            // className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            variant="outlined"
            // fullWidth={true}
          />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <BasePicker value={selectedDate} onChange={handleDateChange}>
              {({ date, handleChange }) => (
                <div>
                  <Calendar
                    date={date}
                    maxDate={{}}
                    disableFuture={false}
                    disablePast={true}
                    minDate={{}}
                    onChange={handleDateChange}
                  />
                </div>
              )}
            </BasePicker>
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item sm={9} className="col2">
          <Grid container justify={"space-around"}>
            <Grid item sm={1}>
              <Grid container justify={"space-around"}>
                <Grid>
                  <Navigationlefttbutton
                    date={selectedDate}
                    onClick={handleDateChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={10} style={{ padding: "0.5%" }}>
              <Week week={returnWeek()} />
            </Grid>
            <Grid item sm={1}>
              <Grid container justify={"space-around"}>
                <Grid>
                  <Navigationrightbutton
                    date={selectedDate}
                    onClick={handleDateChange}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify={"space-around"}>
            <Grid item sm={1}>
              <Grid container justify={"space-around"}>
                <Grid />
              </Grid>
            </Grid>
            <Grid item sm={10} xs={10}>
              <Slots />
            </Grid>
            <Grid item sm={1}>
              <Grid container justify={"space-around"}>
                <Grid />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
