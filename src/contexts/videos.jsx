
import { createContext, useContext, useEffect, useReducer } from "react";
import { videoStateReducer } from "../reducers/reducer";
import { FetchCategories, FetchVideoList, getAllPlayList } from './../services/video-service';

const VideoContext = createContext();
const VideoContextProvider = ({ children }) => {
    const initialVideoState = {
        videoList: [],
        filterByCategory: '',
        categoryList: [],
        itemsInWatchLaterList: [],
        listPlayList: []
    };

    const [state, videoDispatch] = useReducer(
        videoStateReducer,
        initialVideoState
    );

    useEffect(() => {
        FetchVideoList(videoDispatch);
        FetchCategories(videoDispatch);
        getAllPlayList(videoDispatch);
    });
    return (
        <VideoContext.Provider value={{ state, videoDispatch }}>
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
