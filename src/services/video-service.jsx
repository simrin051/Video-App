import axios from "axios";
import { RestSerializer } from "miragejs";
import { ErrorMessage } from "../components/ErrorMessage";
import { useToast } from "../contexts/toast";

//const { state: { token } } = useUserContext();
//var bearer = 'Bearer ' + token;
//const headers = {
//  'Authorization': bearer,
//'Content-Type': 'application/json'
//}

export const FetchVideoList = async (videoDispatch) => {
    try {
        const res = await axios.get("/api/videos");
        if (res.status === 200)
            videoDispatch({
                type: "GET_VIDEOS",
                payload: res.data.videos,
            });
    } catch (e) {
        console.log(e.error);
    }
};

export const FetchCategories = async (videoDispatch) => {
    try {
        const res = await axios.get("/api/categories");
        if (res.status === 200)
            videoDispatch({
                type: "GET_CATEGORIES",
                payload: res.data.categories,
            });
    } catch (e) {
        console.log(e.error);
    }
}

export const getWatchLaterList = async (videoDispatch) => {
    try {
        const res = await axios.get("/api/user/watchlater");
        if (res.status === 200)
            videoDispatch({
                type: "GET_WATCHLATER_LIST",
                payload: res.watchlater
            });
    } catch (e) {
        console.log(e.error);
    }
}

export const addToWatchLaterList = async ({video, videoStateDispatch,showToast}) => {
    try {
        const res = await axios.post("/api/user/watchlater", {video});
        if (res.status === 201) {
            videoStateDispatch({
                type: "ADD_TO_WATCHLATER_LIST",
                payload: res.data.watchlater
            });  
            showToast({ title: "Video added to watch later list", type: "success" });
        }
    } catch (e) {
        console.log(e.error);
    }
}


export const removeFromWatchLaterList = async ({video, videoStateDispatch,showToast}) => {
    try {
        const res = await axios.delete(`/api/user/watchlater/${video._id}`);
        if (res.status === 200) {
            videoStateDispatch({
                type: "REMOVE_FROM_WATCHLATER_LIST",
                payload: res.data.watchlater
            });
            showToast({ title: "Video removed from watch later list", type: "success" });
        }
    } catch (e) {
        console.log(e.error);
    }
}


export const addToLikedVideos = async ({video, videoStateDispatch,showToast}) => {
    try {
        const res = await axios.post(`/api/user/likes`,{video});
        if (res.status === 201) {
            videoStateDispatch({
                type: "HANDLE_LIKED_VIDEOS",
                payload: res.data.likes
            });
        }
    } catch (e) {
        console.log(e.error);
    }
}

export const removeFromLikedVideos = async ({video, videoStateDispatch,showToast}) => {
    try {
        const res = await axios.delete(`/api/user/likes/${video._id}`);
        if (res.status === 200) {
            videoStateDispatch({
                type: "HANDLE_LIKED_VIDEOS",
                payload: res.data.likes
            });
        }
    } catch (e) {
        console.log(e.error);
    }
}