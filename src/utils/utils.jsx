export const isVideoSaved = (_id, playLists) => {
    if (playLists.length === 0) return false;

    return playLists.some(playlist => {
        return (playlist.videos.length === 0) ? false :
            playlist.videos.some(video => video._id === _id)
    });
}

export const VideoInPlaylist=(videoId,playlist) => {
    return (playlist.videos.length === 0) ? false :
     playlist.videos.some(video => video._id === videoId);
}

export const VideoInWatchList=(addedVideo,watchList) => {
    return (watchList.length === 0) ? false :
     watchList.some(video => video._id === addedVideo._id);
}

export const isVideoLiked=(video,likedList) => {
    return (likedList.length === 0) ? false :
    likedList.some(likedVideo => likedVideo._id === video._id);
}

export const displayContentOfMaxLength = (text) => {
    const MAX_LENGTH = 15;
    return text.length<=MAX_LENGTH? text: text.substring(0, MAX_LENGTH)+'...';
}