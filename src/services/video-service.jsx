import axios from "axios";
import { ErrorMessage } from "../components/ErrorMessage";
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

const isVideoAddedToWatchLaterList = (video1, videoList) => {
    console.log("is video added to watch later list " + video1._id);
    for (var video of videoList) {
        console.log("id " + video._id);
    }
    if (videoList.filter((video) => (video._id == video1._id)).length >= 1) {
        console.log("Already added to watch list");
        ErrorMessage("Video is already added to watch later list");
    }
}

export const addToWatchLaterList = async (video, videoDispatch, videoList) => {
    try {
        isVideoAddedToWatchLaterList(video, videoList);
        const res = await axios.post("/api/user/watchlater", { video });
        if (res.status === 201) {
            videoDispatch({
                type: "ADD_TO_WATCHLATER_LIST",
                payload: res.data.watchlater
            });
        }
    } catch (e) {
        console.log(e.error);
    }
}


export const removeFromWatchLaterList = async (video, videoDispatch) => {
    try {
        const res = await axios.delete(`/api/user/watchlater/${video._id}`);
        if (res.status === 200) {
            console.log("res status as 200");
            videoDispatch({
                type: "REMOVE_FROM_WATCHLATER_LIST",
                payload: res.data.watchlater
            });
        }
    } catch (e) {
        console.log(e.error);
    }
}

export const getAllPlayList = async (videoDispatch) => {
    try {
        const res = await axios.get("/api/user/playlist");
        if (res.status === 200)
            videoDispatch({
                type: "GET_PLAYLIST",
                payload: res.playlists
            });

    } catch (e) {
        console.log(e.error);
    }

}

export const createNewPlaylist = (title, description, videoDispatch) => {
    try {
        const res = axios.post("/api/user/playlists", {
            playlist: { title: title, description: description }
        });
        if (res.status === 200) {
            videoDispatch({
                type: "GET_PLAYLIST",
                payload: res.playlists
            });
        }

    } catch (e) {
        console.log(e.error);
    }
}

export const addVideoToPlayList = (video, playlistId, videoDispatch) => {
    try {
        console.log("inside video service addVideoToPlayList");
        console.log("playlist ID " + playlistId);
        const res = axios.post(`/api/user/playlists/playlistId=${playlistId}`, {
            video
        });
        if (res.status === 201) {
            videoDispatch({
                type: "GET_PLAYLIST",
                payload: res.playlists
            });
            console.log("video added to playlist");
        }

    } catch (e) {
        console.log(e.error);
    }
}