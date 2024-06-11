import axios from "axios";
export async function getAllproducts () {
    return axios.get('https://dummyjson.com/products');
}