export const videoStateReducer = (state, { type, payload }) => {
    switch (type) {
        case "GET_CATEGORIES": return { ...state, categoryList: payload };
        case "GET_VIDEOS": return { ...state, videoList: payload };
        case "FILTER_BY_CATEGORY": return { ...state, filterByCategory: payload.skill };
        case "GET_WATCHLATER_LIST": return { ...state, itemsInWatchLaterList: payload };
        case 'ADD_TO_WATCHLATER_LIST': return { ...state, itemsInWatchLaterList: payload };
        case 'REMOVE_FROM_WATCHLATER_LIST': return { ...state, itemsInWatchLaterList: payload };
        case 'ADD_TO_PLAYLIST': return { ...state, listPlayList: payload };
        case 'HANDLE_PLAYLIST': return {
            ...state, listPlayList: state.listPlayList.map((playlist) =>
                playlist._id === payload._id ? payload : playlist
            )
        }
        case 'GET_PLAYLIST': return { ...state, listPlayList: [...state.listPlayList] };
        case 'ADD_TO_HISTORY': return { ...state, watchHistory: payload };
        case 'REMOVE_FROM_HISTORY': return { ...state, watchHistory: payload };
        case 'CLEAR_HISTORY': return { ...state, watchHistory: [] };
        case 'HANDLE_LIKED_VIDEOS': return {...state, likedVideos: payload}
        default: return { ...state };
    }
}

export const authenticationReducer = (state, { type, payload }) => {
    switch (type) {
        case "LOGIN_USER": return {
            ...state,
            token: payload.token,
            userName: payload.userName,
            firstName: payload.firstName
        }
        case "SIGNUP_USER": return {
            ...state, token: payload.token,
            userName: payload.userName,
            firstName: payload.firstName
        }
        case "LOGOUT_USER": return {
            ...state, token: "",userName: "",
            firstName: "",
        }
        default: return state;
    }
}

export const formsReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_FIRSTNAME": return {
            ...state,
            firstName: payload
        }
        case "SET_LASTNAME": return {
            ...state,
            lastName: payload
        }
        case "SET_EMAIL": return {
            ...state,
            email: payload
        }
        case "SET_PASSWORD": return {
            ...state,
            password: payload
        }
        default:
            break;
    }
}

export const errorReducer = (state, { payload, type }) => {
    switch (type) {
        case "ERROR_FIRSTNAME": return {
            ...state,
            firstName: payload
        }
        case "ERROR_LASTNAME": return {
            ...state,
            lastName: payload
        }
        case "ERROR_EMAIL": return {
            ...state,
            email: payload
        }
        case "ERROR_PASSWORD": return {
            ...state,
            password: payload
        }
        default:
            break;
    }
}
