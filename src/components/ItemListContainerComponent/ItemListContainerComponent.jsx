import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemListContainerComponent = ({ products }) => {

    return products.map((products) => {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={products.thumbnail} />
                <Card.Body>
                    <Card.Title>{products.Title}</Card.Title>
                    <Card.Text>
                        {products.description}
                    </Card.Text>
                    <Link to={`item/${products.id}`}>Ir a detalle</Link>
                </Card.Body>
            </Card>)

    })
};

export default ItemListContainerComponent;