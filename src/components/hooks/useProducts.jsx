import React from 'react'
import { getAllproducts } from "../services/products"

export const useProducts = () => {
    const [products, setProducts] = React.useState([])

    React.useEffect (() => {
        getAllproducts()
        .then((response) => {
            setProducts(response.data.products);
        })
        .catch((error) => {
            console.error(error);
        });
    });
    return { products }; 

    
};
