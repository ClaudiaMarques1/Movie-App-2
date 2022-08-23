import React, { useState } from "react";

export const TVSeriesContext = React.createContext(null);

const TVSeriesContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState({})
    const [favourites, setFavourites] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    const addToFavourites = (tv) => {
        if (!favourites.includes(tv.id)) {
            let newFavourites = [...favourites, tv.id];
            setFavourites(newFavourites);
        }
    };

    const addToPlaylist = (tv) => {
        if (!playlists.includes(tv.id)) {
            let newPlaylists = [...playlists, tv.id];
            setPlaylists(newPlaylists);
        }
    };

    const addReview = (tv, review) => {
        setMyReviews({ ...myReviews, [tv.id]: review })
    };

    // We will use this function in a later section
    const removeFromFavourites = (tv) => {
        setFavourites(favourites.filter((tId) => tId !== tv.id));
    };

    const removeFromPlaylists = (tv) => {
        setPlaylists(playlists.filter((tId) => tId !== tv.id));
    };

    return (
        <TVSeriesContext.Provider
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
        </TVSeriesContext.Provider>
    );
};

export default TVSeriesContextProvider;