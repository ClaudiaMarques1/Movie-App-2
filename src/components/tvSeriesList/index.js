import React from "react";
import TVSeries from "../tvSeriesCard";
import Grid from "@material-ui/core/Grid";

const TVSeriesList = ({ tvs, action }) => {
    let TVSeriesCards = tvs.map((t) => (
        <Grid key={t.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <TVSeries key={t.id} tv={t} action={action} />
        </Grid>
    ));
    return TVSeriesCards;
};

export default TVSeriesList;