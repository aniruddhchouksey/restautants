import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 140
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}> • </span>;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        src="../images/restaurant.jpeg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Restaurant Name{" "}
        </Typography>{" "}
        <Typography variant="h5" component="h2">
          Great restaurant{" "}
        </Typography>{" "}
        <Typography className={classes.pos} color="textSecondary">
          awesome location{" "}
        </Typography>{" "}
        <Typography variant="body2" component="p">
          The food here is amazing must try. <br /> {'"a benevolent smile"'}{" "}
        </Typography>{" "}
      </CardContent>{" "}
      <CardActions>
        <Button size="small"> Learn More </Button>{" "}
      </CardActions>{" "}
    </Card>
  );
}
