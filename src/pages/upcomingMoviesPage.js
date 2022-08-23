import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getUpcomingMovie } from '../api/tmdb-api'
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'

const UpcomingPage = (props) => {
    const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingMovie)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const upcomingmovies = data.results;

    const playlists = upcomingmovies.filter(m => m.playylist)
    localStorage.setItem('playlists', JSON.stringify(playlists))
    const addToPlaylists = (movieId) => true

    return (
        <PageTemplate
            title="Upcoming Movies"
            movies={upcomingmovies}
            action={(movie) => {
                return <AddToPlaylistIcon movie={movie} />
            }}
        />
    );
};

export default UpcomingPage; 