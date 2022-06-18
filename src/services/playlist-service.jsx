import axios from "axios";


export const getAllPlayList = async ({ videoStateDispatch }) => {
    try {
        const res = await axios.get("/api/user/playlists", {
            headers: {
                'Authorization': localStorage.getItem("token") ? localStorage.getItem("token") : ''
            }
        });
        console.log(" respone data from GET call" + JSON.stringify(res.data.playlists));
        if (res.status === 200) {
            console.log("response status is 200");
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
        console.log("res data playlists " + JSON.stringify(res.data.playlists));
        if (res.status == 201) {
            showToast({ title: "Playlist is created", type: "success" });
            videoStateDispatch({
                type: "ADD_TO_PLAYLIST",
                payload: res.data.playlists
            });
            const playlistId = res.data.playlists.slice(-1)[0]._id;
            console.log("video " + video + " playlist id " + playlistId);

            if (video) {
                addVideoToPlayList({ playlistId, video, videoStateDispatch, showToast });
                getAllPlayList({ videoStateDispatch });
            }
        }
    } catch (e) {
        console.log("Error inside vdeo service " + e);
    }
}

export const addVideoToPlayList = async ({ playlistId, video, videoStateDispatch, showToast }) => {
    console.log("add video to playlist " + playlistId + " video " + JSON.stringify(video));
    try {
        const res = await axios.post(`/api/user/playlists/${playlistId}`, {
            video
        });
        console.log(" Respnse " + JSON.stringify(res.data.playlist));
        if (res.status === 201) {
            showToast({ title: "Video is added to playlist", type: "success" });
            videoStateDispatch({
                type: "ADD_VIDEO_TO_PLAYLIST",
                payload: res.data.playlist
            });
        }
    } catch (e) {
        console.log(e.error);
    }
}