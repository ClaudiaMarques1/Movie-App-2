import React, { useState } from "react";
import Header from "../headerTVSeriesList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TVSeriesList from "../tvSeriesList";
//import Fab from "@material-ui/core/Fab";
//import Drawer from "@material-ui/core/Drawer";
//import FilterCard from '../filterTVSeriesCard'

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

function TVSeriesListPageTemplate({ tvs, title, action }) {
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Header title={title} />
                </Grid>
                <Grid item container spacing={5}>
                    <TVSeriesList action={action} tvs={tvs} />
                </Grid>
            </Grid>
        </>
    );
}
export default TVSeriesListPageTemplate;