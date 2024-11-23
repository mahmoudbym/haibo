import React, { useState, useEffect } from "react";
import { getCart } from './json';  // Import the getCart function to retrieve cart items

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items from localStorage when the component mounts
  useEffect(() => {
    const storedCart = getCart();  // Get cart items from localStorage
    setCartItems(storedCart);  // Update state with cart items
  }, []);

  // Function to remove item from cart
  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);  // Filter out the item with the given id
    setCartItems(updatedCart);  // Update the state
    localStorage.setItem('cart', JSON.stringify(updatedCart));  // Save updated cart to localStorage
  };

  // Check if the cart is empty
  if (cartItems.length === 0) {
    return <div className="empty-cart">Your cart is empty.</div>;  // Display message if cart is empty
  }

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    return total + (parseFloat(item.price) || 0);  // Make sure price is treated as a number
  }, 0);

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-inner">
              {/* Image section */}
              <div 
                className="test-div" 
                style={{ backgroundImage: `url(${item.img})` }}  // Set background image dynamically
              ></div>

              {/* Text section */}
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>Price: {item.price} $US</p>
                <button onClick={() => handleRemoveItem(item.id)} className="remove-btn">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="total-section">
          <div className="total-price">
            <h3>Total: {totalPrice.toFixed(2)} $US</h3>  {/* Show total price with 2 decimal places */}
          </div>
          <button className="checkout-btn">Checkout</button> {/* Checkout button */}
        </div>
      </div>
    </div>
  );
}

export default Cart;
