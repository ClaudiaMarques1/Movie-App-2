import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { TVSeriesContext } from "../../contexts/TVSeriesContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AddToFavouritesIcon = ({ movie, tv }) => {
    const context = useContext(MoviesContext, TVSeriesContext);

    const handleAddToFavourites = (e) => {
        e.preventDefault();
        context.addToFavourites(movie, tv);
    };
    return (
        <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
            <FavoriteIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToFavouritesIcon;