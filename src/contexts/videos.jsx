
import { createContext, useContext, useEffect, useReducer } from "react";
import { videoStateReducer } from "../reducers/reducer";
import { FetchCategories, FetchVideoList } from './../services/video-service';
import { } from './../services/playlist-service';

const VideoContext = createContext();
const VideoContextProvider = ({ children }) => {
    const initialVideoState = {
        videoList: [],
        filterByCategory: '',
        categoryList: [],
        itemsInWatchLaterList: [],
        listPlayList: [],
        watchHistory: []
    };

    const [state, videoStateDispatch] = useReducer(
        videoStateReducer,
        initialVideoState
    );

    useEffect(() => {
        FetchVideoList(videoStateDispatch);
        FetchCategories(videoStateDispatch);
    }, []);
    return (
        <VideoContext.Provider value={{ state, videoStateDispatch }}>
            {children}
        </VideoContext.Provider>
    );
}


const useVideoContext = () => {
    const context = useContext(VideoContext);
    if (!context) {
        throw new Error(`useVideoContext must be used inside a context provider`);
    }
    return context;
};

export { VideoContextProvider, useVideoContext };
