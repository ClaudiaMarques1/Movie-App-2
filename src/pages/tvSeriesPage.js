import React from "react";
import PageTemplate from "../components/templateTVSeriesListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getTVSeries } from '../api/tmdb-api'

const TVSeriesPage = (props) => {
    const { data, error, isLoading, isError } = useQuery('TV', getTVSeries)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const tvs = data.results;

    return (
        <PageTemplate
            title="TV Series"
            tvs={tvs}
            action={(tv) => { }}
        />
    );
};

export default TVSeriesPage;