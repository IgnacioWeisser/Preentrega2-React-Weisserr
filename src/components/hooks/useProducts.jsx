import React from 'react'

export const useProducts = () => {
    const [products, setProducts] = React.useState([])

    React.useEffect (() => {
        getAllproducts()
        .then((Response) => {
            setProducts(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    });
    return { products }; 

    
};
