import axios from "axios";
export async function getAllproducts () {
    return axios.get('https://dummyjson.com/products');
}

export async function getProductById (id) {
    return axios.get(`https://dummyjson.com/products/1/${id}`)
}