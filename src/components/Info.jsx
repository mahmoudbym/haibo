import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { products } from './json';  // Import products from your json file
import { getCart, saveCart } from './json';  // Import getCart and saveCart functions
import { Link } from "react-router-dom";

function Info() {
  const location = useLocation();
  const { productId } = location.state || {};  // Get productId passed via state

  const [product, setProduct] = useState(null);

  // Fetch product data based on the productId
  useEffect(() => {
    if (productId) {
      const fetchedProduct = products.find(product => product.id === productId); // Fetch product using productId
      setProduct(fetchedProduct);
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;  // Display loading state while fetching data
  }

  const backgroundImage = `url(${product.img})`;

  // Function to handle adding product to the cart
  const handleAddToCart = () => {
    const cart = getCart(); // Get the current cart
    cart.push(product);  // Add the selected product to the cart
    saveCart(cart);  // Save the updated cart to localStorage

    alert(`${product.name} has been added to your cart!`);  // Optional: Show a confirmation message
    console.log(cart);  // Optional: Log cart to console for debugging
  };

  return (
    <div className="info-div">
      <div 
        className="info-img-container"
        style={{
          backgroundImage: backgroundImage,
        }}
      ></div>
      <div className="info-desc">
        <h1 className="info-desc-h1">{product.name}</h1>
        <h3 className="info-desc-h2">{product.price} $US</h3>
        <button className="info-btn btn-1" onClick={handleAddToCart}>Add to Cart</button> <br />
        <Link to='/cart'>
        <button className="info-btn btn-2">Buy Now</button>
        </Link>
        <p className="info-p">{product.desc}</p>  
      </div>
    </div>
  );
}

export default Info;
