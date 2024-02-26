import axios from "axios";

export const getAllProducts = async (callback) => {
    try {
        const response = await axios.get("http://localhost:3000/products")
        return callback(response.data.products)
    } catch (error) {
        console.error(error)
    }
}

export const getProductById = async (id, callback) => {
    try {
        const response = await axios.get(`http://localhost:3000/products/id/${id}`)
        return callback(response.data.products)
    } catch (error) {
        console.error(error)
    }
}

export const getProductsByCategory = async (category, callback) => {
    try {
        const response = await axios.get(`http://localhost:3000/products/category/${category}`)
        return callback(response.data.products)
    } catch (error) {
        console.error(error)
    }

}

export const searchProduct = async (value, callback) => {
    try {
        if (!value) return;
        const response = await axios.get(`http://localhost:3000/products/search?query=${value}`)
        return callback(response.data.products)
    } catch (error) {
        console.error(error)
    }
}