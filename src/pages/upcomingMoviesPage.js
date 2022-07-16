import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovie } from "../api/tmdb-api";

const UpcomingMoviesPage = (props) => {
    const [movies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        getUpcomingMovie().then(movies => {
            setUpcomingMovies(movies);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PageTemplate
            title='Upcoming Movies'
            movies={movies}
        />
    );
};
export default UpcomingMoviesPage;