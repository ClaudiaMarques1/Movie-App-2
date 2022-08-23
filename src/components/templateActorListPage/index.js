import React, { useState } from "react";
import Header from "../headerActorList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ActorList from "../actorList";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#bfbfbf",
        paddingTop: theme.spacing(7),
    },
    fab: {
        marginTop: theme.spacing(8),
        position: "fixed",
        top: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

function ActorListPageTemplate({ persons, title, action }) {
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Header title={title} />
                </Grid>
                <Grid item container spacing={5}>
                    <ActorList action={action} persons={persons} />
                </Grid>
            </Grid>
        </>
    );
}
export default ActorListPageTemplate;