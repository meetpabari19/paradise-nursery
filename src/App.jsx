import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import CartItem from './CartItem';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [currentPage, setCurrentPage] = useState('landing');
  return (
    <div className='app'>
      {!showProductList ? (
        <div className='landing-page'>
          <div className='landing-content'>
            <h1>Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>
            <button className='get-started-button' onClick={() => { setShowProductList(true); setCurrentPage('products'); }}>Get Started</button>
            <AboutUs />
          </div>
        </div>
      ) : (
        <div>
          {currentPage === 'products' && <ProductList setCurrentPage={setCurrentPage} />}
          {currentPage === 'cart' && <CartItem setCurrentPage={setCurrentPage} />}
        </div>
      )}
    </div>
  );
}

export default App;
