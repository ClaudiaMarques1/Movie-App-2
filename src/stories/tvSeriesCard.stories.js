import React from "react";
import TVSeriesCard from "../components/tvSeriesCard";
import SampleTv from "./tvSampleData";

export default {
    title: "TV Series Page/TVSeriesCard",
    component: TVSeriesCard,
};

export const Basic = () => {
    return (
        <TVSeriesCard
            tv={SampleTv}
        />
    );
};
Basic.storyName = "Default";

export const Exceptional = () => {
    const sampleNoPoster = { ...SampleTv, profile_path: undefined };
    return (
        <TVSeriesCard
            tv={sampleNoPoster}
        />
    );
};
Exceptional.storyName = "exception";