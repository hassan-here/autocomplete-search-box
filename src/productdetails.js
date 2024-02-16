// productdetails.js

import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: 'white' }}>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ maxWidth: '200px', borderRadius: '10px', marginBottom: '10px' }} />
      <p style={{ color: 'white' }}>{product.description}</p>
      <p style={{ color: 'white' }}>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;
