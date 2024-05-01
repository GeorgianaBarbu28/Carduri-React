import { useState } from 'react'
import React from 'react';
import ProductCard from './components/Cards/ProductCards';
import './App.css'
import data from './components/Cards/Data'; 




function App() {
  

  return (
    
      <div className='app-container'>
        <h1>Produse</h1>
        <div className='product-list'>
          {data.map(product =>(
            <ProductCard key={product.id} product = {product} />
          ))}
        </div>
      </div>
      
  );
}

export default App
