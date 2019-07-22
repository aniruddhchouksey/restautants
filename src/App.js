import React from "react";
import "./App.css";
import { Grid, Paper, Box } from "@material-ui/core";
import Calendar from "react-calendar";
import TextField from "@material-ui/core/TextField";
import Restaurantcard from "./components/Restaurantcard";
import Navigationrightbutton from "./components/Navigationrightbutton";
import Navigationlefttbutton from "./components/Navigationleftbutton";
import Week from "./components/Week";
import Slots from "./components/Slots";

function App(props) {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  return (
    <Grid container spacing={0} style={{ margin: "20dp" }}>
      <Grid direction={"column"} sm={3}>
        <Paper style={{ padding: "10px", margin: "15px" }}>
          <Calendar onChange={setSelectedDate} value={selectedDate} />
          <TextField
            id="outlined-number"
            label="Number"
            // value={values.age}
            // onChange={handleChange('age')}
            type="number"
            // className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            variant="outlined"
            fullWidth="true"
          />
          <Restaurantcard />
        </Paper>
      </Grid>
      <Grid direction={"column"} item sm={9}>
        <Paper style={{ padding: "10px", margin: "15px" }}>
          <Grid container justify={"space-around"}>
            <Grid item sm={1}>
              <Grid container justify={"space-around"}>
                <Grid items>
                  <Navigationlefttbutton />
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={10}>
              <Week />
            </Grid>
            <Grid item sm={1}>
              <Grid container justify={"space-around"}>
                <Grid items>
                  <Navigationrightbutton />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify={"space-around"}>
            <Grid item sm={1}>
              <Grid container justify={"space-around"}>
                <Grid items />
              </Grid>
            </Grid>
            <Grid item sm={10}>
              <Slots />
            </Grid>
            <Grid item sm={1}>
              <Grid container justify={"space-around"}>
                <Grid items />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        {/* <Paper style={{ padding: "10px", margin: "15px" }}> */}
        {/* </Paper> */}
      </Grid>
    </Grid>
  );
}

export default App;
