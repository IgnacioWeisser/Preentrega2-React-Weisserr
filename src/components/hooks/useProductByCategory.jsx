import React from 'react'
import { getProductsByCategory } from '../services/products'

export const useProductByCategory = (category) => {
    const [products, setProduct] = React.useState([])

    React.useEffect(() => {
        getProductsByCategory(category)
            .then((res) => {
            setProduct(res.data.products);
        })
        .catch((error) =>{
            console.error(error);
        });
        
    }, [category]);

    return { products }
}

