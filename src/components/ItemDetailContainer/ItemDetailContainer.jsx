import React from 'react';

const ItemDetailContainer = ({ product }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{product.title}</h1>
      <p style={styles.description}>{product.description}</p>
      <p style={styles.price}>${product.price}</p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: 'auto',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: '16px',
    color: '#666',
    marginTop: '10px',
    marginBottom: '20px',
  },
  price: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#27ae60',
  },
};

export default ItemDetailContainer;