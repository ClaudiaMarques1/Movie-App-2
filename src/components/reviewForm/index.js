import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { useForm } from "react-hook-form";
import { MoviesContext } from "../../contexts/moviesContext";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useNavigate } from 'react-router-dom'

const ratings = [
    {
        value: 5,
        label: "Excellent",
    },
    {
        value: 4,
        label: "Good",
    },
    {
        value: 3,
        label: "Average",
    },
    {
        value: 2,
        label: "Poor",
    },
    {
        value: 0,
        label: "Terrible",
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    form: {
        width: "100%",
        "& > * ": {
            marginTop: theme.spacing(2),
        },
    },
    textField: {
        width: "40ch",
    },
    submit: {
        marginRight: theme.spacing(2),
    },
    snack: {
        width: "50%",
        "& > * ": {
            width: "100%",
        },
    },
}));

const ReviewForm = ({ movie }) => {
    const classes = useStyles();
    const { register, handleSubmit, errors, reset } = useForm();
    const context = useContext(MoviesContext);
    const [rating, setRating] = useState(3);
    const [open, setOpen] = useState(false);  //NEW
    const navigate = useNavigate()

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    const handleSnackClose = (event) => {
        setOpen(false);
        navigate("/movies/favourites");
    };

    const onSubmit = (review) => {
        review.movieId = movie.id;
        review.rating = rating;
        // console.log(review);
        context.addReview(movie, review);
        setOpen(true);   // NEW
    };

    return (
        <Box component="div" className={classes.root}>
            <Typography component="h2" variant="h3">
                Write a review
            </Typography>
            {/* Start new code */}
            <Snackbar
                className={classes.snack}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                onClose={handleSnackClose}
            >
                <MuiAlert
                    severity="success"
                    variant="filled"
                    onClose={handleSnackClose}
                >
                    <Typography variant="h4">
                        Thank you for submitting a review
                    </Typography>
                </MuiAlert>
            </Snackbar>
            {/* End new code */}
            <form>
                .....as before ...
            </form>
        </Box >
    );
};

export default ReviewForm;