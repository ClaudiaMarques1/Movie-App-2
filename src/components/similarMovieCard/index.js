import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core//Card';
import CardActions from '@material-ui/core//CardActions';
import CardContent from '@material-ui/core//CardContent';
import CardMedia from '@material-ui/core//CardMedia';
import Button from '@material-ui/core//Button';
import Typography from '@material-ui/core//Typography';
import { getSimilarMovie } from '../../api/tmdb-api';

const useStyles = makeStyles({
    root: {
        minWidth: 550,
    },
});

export default function SimilarMovies({ movie }) {
    const classes = useStyles();
    const [similars, setSimilars] = useState([]);

    useEffect(() => {
        getSimilarMovie(movie.id).then((similars) => {
            setSimilars(similars);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className={classes.root}>
            {
                similars.map((s) => (
                    <Card key={s.id}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={s.poster_path}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {s.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                ))
            }
        </section>
    );
}