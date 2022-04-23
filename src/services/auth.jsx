import axios from "axios";

export async function createUser(data) {
    try {
        const response = await axios.post(`/api/auth/signup`, JSON.stringify(data));
        if (response.status == 201) {
            localStorage?.setItem(
                'session',
                JSON.stringify({
                    username: response.data.createdUser.email,
                    token: response.data.encodedToken
                })
            );
        }
    } catch (err) {
        console.log(err);
    }
}