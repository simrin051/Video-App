import axios from "axios";


export const getAllPlayList = async ({ videoStateDispatch }) => {
    try {
        const res = await axios.get("/api/user/playlists");
        if (res.status === 200) {
            videoStateDispatch({
                type: "GET_PLAYLIST",
                payload: res.data.playlists
            });
        }
    } catch (e) {
        console.log(e);
    }
}

export const CreateNewPlaylist = async ({ video, playlist, videoStateDispatch, showToast }) => {
    try {
        let res = await axios.post("/api/user/playlists", { playlist });
        if (res.status == 201) {
            showToast({ title: "Playlist is created", type: "success" });
            videoStateDispatch({
                type: "ADD_TO_PLAYLIST",
                payload: res.data.playlists
            });
            const playlistId = res.data.playlists.slice(-1)[0]._id;

            if (video) {
                addVideoToPlayList({ playlistId, video, videoStateDispatch, showToast });        
            }
        }
    } catch (e) {
        console.log("Error inside vdeo service " + e);
    }
}

export const addVideoToPlayList = async ({ playlistId, video, videoStateDispatch, showToast }) => {
    console.log("add video to playlist service call");
    try {
        const res = await axios.post(`/api/user/playlists/${playlistId}`, {
            video
        });
        console.log(" response "+JSON.stringify(res));
        if (res.status === 201) {
            showToast({ title: "Video is added to playlist", type: "success" });
            videoStateDispatch({
                type: "HANDLE_PLAYLIST",
                payload: res.data.playlist
            });
        }
    } catch (e) {
        console.log("error "+JSON.stringify(e));
        console.log(e.error);
    }
}


export const removeVideoFromPlayList = async ({ playlistId, video, videoStateDispatch, showToast }) => {
    try {
        const res = await axios.delete(`/api/user/playlists/${playlistId}/${video._id}`);
        if (res.status === 200) {
            showToast({ title: "Removed video from playlist", type: "success" });
            videoStateDispatch({
                type: "HANDLE_PLAYLIST",
                payload: res.data.playlist
            });
        }
    } catch (e) {
        console.log("error "+JSON.stringify(e));
        console.log(e.error);
    }
}

export const addToHistoryPlaylist = async ({ video, videoStateDispatch, showToast }) => {
    try {
        console.log("inside add to history playlist  ");
        console.log(" video id "+JSON.stringify(video));
        const res = await axios.post(`/api/user/history`,{video});
        console.log(res.data.history+" status "+res.status);
        if (res.status === 201) {
            showToast({ title: "Add video to history", type: "success" });
            videoStateDispatch({
                type: "ADD_TO_HISTORY",
                payload: res.data.history
            });
        }
    } catch (e) {
        console.log("error "+JSON.stringify(e));
        console.log(e.error);
    }
}

export const clearHistoryPlaylist =  async ({ videoStateDispatch, showToast }) => {
    videoStateDispatch({
        type: "CLEAR_HISTORY",
        payload: []
    });  
    showToast({ title: "History cleared", type: "success" });
}