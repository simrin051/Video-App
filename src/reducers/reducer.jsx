export const formsReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_FORM":
            const { name, value, hasError, error, isFormValid } = action.data
            console.log("Action Data " + JSON.stringify(action.data));
            return {
                ...state,
                // update the state of the particular field,
                // by retaining the state of other fields
                [name]: { ...state[name], value, hasError, error },
                isFormValid,
            }
        default:
            return state
    }
}

export const videoStateReducer = (state, { type, payload }) => {

    switch (type) {
        case "GET_VIDEOS": return { ...state, videoList: payload };
        case "FILTER_BY_CATEGORY": return { ...state, videoList: payload };
        default: return state;
    }
}