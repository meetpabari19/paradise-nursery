import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ setCurrentPage }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const totalAmount = cartItems.reduce((sum, item) => sum + parseFloat(item.cost.replace('$', '')) * item.quantity, 0).toFixed(2);
  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);

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
        <h1>Total Cart Amount: ${totalAmount}</h1>
        {cartItems.map((item, i) => (
          <div key={i} style={{display:'flex', gap:'20px', borderBottom:'1px solid #ccc', padding:'10px 0'}}>
            <img src={item.image} alt={item.name} style={{width:'80px', height:'80px', objectFit:'cover'}} />
            <div>
              <h3>{item.name}</h3>
              <p>Unit Price: {item.cost}</p>
              <p>Total: ${(parseFloat(item.cost.replace('$', '')) * item.quantity).toFixed(2)}</p>
              <div>
                <button onClick={() => item.quantity > 1 ? dispatch(updateQuantity({name:item.name, quantity:item.quantity-1})) : dispatch(removeItem(item.name))}>-</button>
                <span> {item.quantity} </span>
                <button onClick={() => dispatch(updateQuantity({name:item.name, quantity:item.quantity+1}))}>+</button>
              </div>
              <button onClick={() => dispatch(removeItem(item.name))} style={{marginTop:'5px', background:'red', color:'white', border:'none', padding:'5px 10px'}}>Delete</button>
            </div>
          </div>
        ))}
        <div style={{marginTop:'20px'}}>
          <button onClick={() => setCurrentPage('products')} style={{padding:'10px 20px', marginRight:'10px'}}>Continue Shopping</button>
          <button onClick={() => alert('Coming Soon')} style={{padding:'10px 20px', background:'green', color:'white', border:'none'}}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
