import React from "react";
import PageTemplate from "../components/templateActorListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getPeople } from '../api/tmdb-api'

const ActorsPage = (props) => {
    const { data, error, isLoading, isError } = useQuery('person', getPeople)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const persons = data.results;

    return (
        <PageTemplate
            title="Actors"
            persons={persons}
            action={(person) => { }}
        />
    );
};

export default ActorsPage;