import { createContext, useContext, useState, useEffect } from "react";
import { getAllPlayList } from './../services/playlist-service';
import { useVideoContext } from "./videos";

const PlaylistModalContext = createContext();

const PlaylistModalProvider = ({ children }) => {
    const [displayModal, setDisplayModal] = useState(false);
    const [video, setVideo] = useState({});

    return (
        <PlaylistModalContext.Provider
            value={{ displayModal, setDisplayModal, video, setVideo }}
        >
            {children}
        </PlaylistModalContext.Provider>
    );
};

const usePlaylistModal = () => {
    const context = useContext(PlaylistModalContext);
    if (!context) {
        throw new Error(
            `use use must be used inside a context provider`
        );
    }
    return context;
};
export { PlaylistModalProvider, usePlaylistModal };
