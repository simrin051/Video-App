import axios from "axios";
import { useToast } from "../contexts/toast";


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

export const CreateNewPlaylist = async (title, description, video, videoDispatch, showToast) => {
    try {
        let res = await axios.post("/api/user/playlists", {
            playlist: { title: title, description: description }
        });

        if (res.status == 201) {
            showToast({ title: "Playlist is created", type: "success" });
            videoDispatch({
                type: "ADD_TO_PLAYLIST",
                payload: res.data.playlists
            });
            const playlistId = res.data.playlists.slice(-1)[0]._id;
            console.log("video " + video + " playlist id " + playlistId);
            if (video) {
                addVideoToPlayList(playlistId, video, videoDispatch, showToast);
            }
        }
    } catch (e) {
        console.log("Error inside vdeo service " + e);
    }
}

export const addVideoToPlayList = async (playlistId, video, videoDispatch, showToast) => {
    console.log("add video to playlist " + playlistId);
    try {
        const res = await axios.post(`/api/user/playlists/${playlistId}`, {
            video
        });
        if (res.status === 201) {
            showToast({ title: "Video is added to playlist", type: "success" });
            videoDispatch({
                type: "ADD_VIDEO_TO_PLAYLIST",
                payload: video
            });
        }
    } catch (e) {
        console.log(e.error);
    }
}