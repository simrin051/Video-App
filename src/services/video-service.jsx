import axios from "axios";
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

export const FetchPlayList = async (videoDispatch) => {
    try {
        const res = await axios.get("/api/user/playlist");
        if (res.status === 200)
            videoDispatch({
                type: "GET_PLAYLIST",
                payload: res.data.playlists,
            });
    } catch (e) {
        console.log(e.error);
    }
}