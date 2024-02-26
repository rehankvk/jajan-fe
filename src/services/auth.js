import axios from "axios";

export const login = async (data, callback) => {
    try {
        const response= await axios.post("http://localhost:3000/users/login", data);
        return callback(response);
    } catch (error) {
        callback(error);
    }
};

export const register = async (data, callback) => {
    try {
        const response = await axios.post('http://localhost:3000/users/register', data)
        return callback(true, response)
    } catch (error) {
        console.error(error)
    }
}

export const updateProfile = async (data, callback) => {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.patch(`http://localhost:3000/users/update`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        return callback(true, response);
    } catch (error) {
        callback(false, error);
    }
};