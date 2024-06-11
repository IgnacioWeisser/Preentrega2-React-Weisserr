import React from 'react'
import ItemListContainerComponent from '../components/ItemListContainerComponent/ItemListContainerComponent'
import { useProducts } from '../components/hooks/useProducts'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
  const { products } = useProducts()
 
  return (
    <>
      <ItemListContainerComponent products={products}/>
      </>
  )
}

export default Home