import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AddToWatchlistsIcon = ({ movie }) => {
    const context = useContext(MoviesContext);

    const handleAddToWatchlists = (e) => {
        e.preventDefault();
        context.addToWatchlists(movie);
    };
    return (
        <IconButton aria-label="add to watchlists" onClick={handleAddToWatchlists}>
            <FavoriteIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToWatchlistsIcon;