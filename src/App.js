import React, { useState } from 'react';
import axios from 'axios';
import SearchBox from "./searchbox";
import ProductDetails from "./productdetails";
import "./App.css";

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = async product => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${product.id}`);
      setSelectedProduct(response.data);
    } catch (error) {
      console.error('Error fetching product details:', error.message);
    }
  };

  return (
    <div>
      <h1>Search Your Product</h1>
      <SearchBox onSelectProduct={handleSelectProduct} />
      {selectedProduct && <ProductDetails product={selectedProduct} />}
    </div>
  );
};

export default App;
