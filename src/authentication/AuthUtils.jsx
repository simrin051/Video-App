
const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export const validateInput = (name, value) => {
    let hasError = false,
        error = ""
    switch (name) {
        case "email":
            if (value.trim() === "") {
                hasError = true
                error = "Email cannot be empty"
            } else if (!validEmailRegex.test(value)) {
                hasError = true
                error = "Email is invalid"
            } else {
                hasError = false
                error = ""
            }
            break;
        case "password": if (value.length < 8) {
            hasError = true
            error = "Password cannot be less than 8";
        }
            break;
        default:
            break
    }
    return { hasError, error }
}


export const onInputChange = (name, value, dispatch, formState) => {
    const { hasError, error } = validateInput(name, value)
    let isFormValid = true

    for (const key in formState) {
        const item = formState[key]
        // Check if the current field has error
        if (key === name && hasError) {
            isFormValid = false
            break
        } else if (key !== name && item.hasError) {
            // Check if any other field has error
            isFormValid = false
            break
        }
    }

    dispatch({
        type: "UPDATE_FORM",
        data: { name, value, hasError, error, isFormValid },
    })
}
