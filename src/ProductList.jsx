import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList({ setCurrentPage }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});
  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(p => ({ ...p, [plant.name]: true }));
  };

  const plantsArray = [
    {
      category: 'Air Purifying',
      plants: [
        { name: 'Snake Plant', image: 'https://images.unsplash.com/photo-1599598425947-4402636a61f8', description: 'Oxygen at night', cost: '$15' },
        { name: 'Spider Plant', image: 'https://images.unsplash.com/photo-1572688484438-3130463bc725', description: 'Filters air', cost: '$12' },
        { name: 'Peace Lily', image: 'https://images.unsplash.com/photo-1593482892542-498393e1b0c0', description: 'Removes toxins', cost: '$18' },
        { name: 'Boston Fern', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b', description: 'Humidity control', cost: '$14' },
        { name: 'Rubber Plant', image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42', description: 'Glossy leaves', cost: '$20' },
        { name: 'Aloe Vera', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09', description: 'Healing gel', cost: '$10' }
      ]
    },
    {
      category: 'Aromatic Fragrant',
      plants: [
        { name: 'Lavender', image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a', description: 'Calming scent', cost: '$22' },
        { name: 'Jasmine', image: 'https://images.unsplash.com/photo-1592417817098-8f3d691a4bf5', description: 'Sweet aroma', cost: '$25' },
        { name: 'Rosemary', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5', description: 'Herbal scent', cost: '$15' },
        { name: 'Mint', image: 'https://images.unsplash.com/photo-1628556270448-4d4e99bb8f55', description: 'Cooling aroma', cost: '$8' },
        { name: 'Geranium', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e', description: 'Citrus leaves', cost: '$16' },
        { name: 'Eucalyptus', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc', description: 'Refreshing scent', cost: '$30' }
      ]
    },
    {
      category: 'Low Maintenance',
      plants: [
        { name: 'ZZ Plant', image: 'https://images.unsplash.com/photo-1632207214225-fb162ad91942', description: 'Low light survivor', cost: '$19' },
        { name: 'Pothos', image: 'https://images.unsplash.com/photo-1584583509374-0f3325d7d740', description: 'Hardy vine', cost: '$11' },
        { name: 'Cast Iron', image: 'https://images.unsplash.com/photo-1525498128493-380d1990a112', description: 'Indestructible', cost: '$24' },
        { name: 'Succulent', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a', description: 'Minimal water', cost: '$9' },
        { name: 'Cactus', image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9', description: 'Desert plant', cost: '$13' },
        { name: 'Jade Plant', image: 'https://images.unsplash.com/photo-1545241047-6083a3684587', description: 'Good luck', cost: '$17' }
      ]
    }
  ];

  return (
    <div>
      <nav style={{display:'flex', justifyContent:'space-between', padding:'15px', background:'#333', color:'#fff'}}>
        <h3 onClick={() => setCurrentPage('landing')} style={{cursor:'pointer'}}>Paradise Nursery</h3>
        <div>
          <span onClick={() => setCurrentPage('landing')} style={{cursor:'pointer', margin:'0 15px'}}>Home</span>
          <span onClick={() => setCurrentPage('products')} style={{cursor:'pointer', margin:'0 15px'}}>Plants</span>
          <span onClick={() => setCurrentPage('cart')} style={{cursor:'pointer', margin:'0 15px'}}>🛒 Cart ({totalItems})</span>
        </div>
      </nav>
      <div style={{padding:'20px'}}>
        {plantsArray.map((cat, i) => (
          <div key={i}>
            <h2>{cat.category}</h2>
            <div style={{display:'flex', flexWrap:'wrap', gap:'20px'}}>
              {cat.plants.map((p, j) => (
                <div key={j} style={{border:'1px solid #ccc', padding:'15px', width:'200px'}}>
                  <img src={p.image} alt={p.name} style={{width:'100%', height:'120px', objectFit:'cover'}} />
                  <h4>{p.name}</h4>
                  <p>{p.description}</p>
                  <p>{p.cost}</p>
                  <button onClick={() => handleAdd(p)} disabled={addedToCart[p.name]}>
                    {addedToCart[p.name] ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
