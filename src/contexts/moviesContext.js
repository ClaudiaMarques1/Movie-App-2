import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [watchlists, setWatchlists, favourites, setFavourites, myReviews, setMyReviews] = useState([]);

    const addToFavourites = (movie) => {
        if (!favourites.includes(movie.id)) {
            let newFavourites = [...favourites, movie.id];
            setFavourites(newFavourites);
        }
    };

    const addToWatchlists = (movie) => {
        if (!watchlists.includes(movie.id)) {
            let newWatchlists = [...watchlists, movie.id];
            setWatchlists(newWatchlists);
        }
    };

    const removeFromWatchlist = (movie) => {
        setWatchlists(watchlists.filter((mId) => mId !== movie.id));
    };

    const addReview = (movie, review) => {
        setMyReviews({ ...myReviews, [movie.id]: review })
    };

    // We will use this function in a later section
    const removeFromFavourites = (movie) => {
        setFavourites(favourites.filter((mId) => mId !== movie.id));
    };

    return (
        <MoviesContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                addReview,
                watchlists,
                addToWatchlists,
                removeFromWatchlist,
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;