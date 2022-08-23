import { useEffect, useState } from "react";
import { getTVSerie } from '../api/tmdb-api'

const useTV = tv_id => {
    const [tv, setTVSerie] = useState(null);
    useEffect(() => {
        getTVSerie(tv_id).then(tv => {
            setTVSerie(tv);
        });
    }, [tv_id]);
    return [tv, setTVSerie];
};

export default useTV