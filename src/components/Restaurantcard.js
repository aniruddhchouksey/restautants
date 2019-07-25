import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "100%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader title="Shrimp and Chorizo Paella" />
      {/* <CardMedia
        className={classes.media}
        image="https://www.theriverside.co.uk/images/Inside-Restaurant.jpg"
        title="Paella dish"
      /> */}
      <Carousel
        infiniteLoop
        interval="3000"
        thumbWidth={"0"}
        showThumbs={false}
        autoPlay
      >
        <div>
          <img src="https://www.theriverside.co.uk/images/Inside-Restaurant.jpg" />
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952__340.jpg" />
        </div>
        <div>
          <img src="https://data.luebeck-tourismus.de/typo3temp/GB/csm_shutterstock_73748515_01_cf1fd34057_519ffe33ac.jpg" />
        </div>
      </Carousel>
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          Time - 7pm-11pm <br /> All Week
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            MORE INFORMATION AND DETAILS ABOUT THE RESTAURANTS
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
