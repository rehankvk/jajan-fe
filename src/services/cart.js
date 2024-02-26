import axios from "axios"
import { jwtDecode } from "jwt-decode"

export const getAllCart = async (callback) => {
    try {
        const token = localStorage.getItem("token");
        const decoded = await jwtDecode(token); // Assuming 'jwtDecode' exists
        const userId = decoded.id;

        const response = await axios.get('http://localhost:3000/carts', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'UserId': userId
            }
        });
        return callback(response.data.carts)
    } catch (error) {
        console.error(error)
    }
}

export const deleteCart = async (id, callback) => {
    const token = localStorage.getItem("token");
    const response = await axios.delete(`http://localhost:3000/carts/del/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    window.alert(response.data.message)
    window.location.reload()
}

export const updateQty = async (id, newQty, type) => {
    const data = { newQty, type }
    const response = await axios.patch(`http://localhost:3000/carts/update/${id}`, data)
    if (newQty === 1) {
        await deleteCart(id)
    }
    window.alert(response.data.message)
    window.location.reload()
}

export const addToCart = async (data, callback) => {
    const token = localStorage.getItem("token");
    const response = await axios.post('http://localhost:3000/carts/add', data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    return callback(response)
}