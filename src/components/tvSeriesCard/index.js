import React, { useContext } from "react";
//import { Link } from "react-router-dom";
//import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
//import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
//import StarRateIcon from "@material-ui/icons/StarRate";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
//import { TVSeriesContext } from "../contexts/tvSeriesContext";

const useStyles = makeStyles({
    card: { maxWidth: 345 },
    media: { height: 500 },
    avatar: {
        backgroundColor: "rgb(255, 0, 0)",
    },
});

export default function TVSeriesCard(props) {
    const classes = useStyles();
    const tv = props.tv;
    return (
        <Card className={classes.card}>
            <CardHeader className={classes.header} title={tv.title} />
            <CardMedia
                className={classes.media}
                image={
                    tv.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}`
                        : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
                }
            />
            <CardContent>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            {tv.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            <FavoriteIcon fontSize="small" />
                            {"  "} {tv.popularity}{" "}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={null}>
                    <FavoriteIcon color="primary" fontSize="large" />
                </IconButton>
                <Button variant="outlined" size="medium" color="primary">
                    More Info ...
                </Button>
            </CardActions>
        </Card>
    );
}