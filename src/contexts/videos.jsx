
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
        listPlayList: []
    };

    const [state, videoDispatch] = useReducer(
        videoStateReducer,
        initialVideoState
    );

    console.log(" playlist in video context " + JSON.stringify(state.listPlayList));
    console.log(" playlist in video context length " + (state.listPlayList.length));


    useEffect(() => {
        FetchVideoList(videoDispatch);
        FetchCategories(videoDispatch);
    }, []);
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
