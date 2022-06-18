export const isVideoSaved = (_id, playLists) => {
    if (playLists.length === 0) return false;

    return playLists.some(playlist => {
        return (playlist.videos.length === 0) ? false :
            playlist.videos.some(video => video._id === _id)
    });
}