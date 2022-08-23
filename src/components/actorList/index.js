import React from "react";
import Actor from "../actorCard";
import Grid from "@material-ui/core/Grid";

const ActorList = ({ persons, action }) => {
    let actorCards = persons.map((a) => (
        <Grid key={a.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Actor key={a.id} person={a} action={action} />
        </Grid>
    ));
    return actorCards;
};

export default ActorList;