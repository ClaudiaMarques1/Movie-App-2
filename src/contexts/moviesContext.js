import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState({})
    const [favourites, setFavourites] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    const addToFavourites = (movie) => {
        if (!favourites.includes(movie.id)) {
            let newFavourites = [...favourites, movie.id];
            setFavourites(newFavourites);
        }
    };

    const addToPlaylist = (movie) => {
        if (!playlists.includes(movie.id)) {
            let newPlaylists = [...playlists, movie.id];
            setPlaylists(newPlaylists);
        }
    };

    const addReview = (movie, review) => {
        setMyReviews({ ...myReviews, [movie.id]: review })
    };

    // We will use this function in a later section
    const removeFromFavourites = (movie) => {
        setFavourites(favourites.filter((mId) => mId !== movie.id));
    };

    const removeFromPlaylists = (movie) => {
        setPlaylists(playlists.filter((mId) => mId !== movie.id));
    };

    return (
        <MoviesContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                addReview,
                playlists,
                addToPlaylist,
                removeFromPlaylists,
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;