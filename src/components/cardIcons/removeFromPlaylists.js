import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromPlaylistsIcon = ({ movie }) => {
    const context = useContext(MoviesContext);

    const handleRemoveFromPlaylists = (e) => {
        e.preventDefault();
        context.removeFromPlaylists(movie);
    };
    return (
        <IconButton
            aria-label="remove from playlists"
            onClick={handleRemoveFromPlaylists}
        >
            <DeleteIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default RemoveFromPlaylistsIcon;