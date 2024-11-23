import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { products } from './json'; // Import the products array
import './style/homeStyle.css';
import './style/Collection.css';

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const toggleSearch = () => setShowSearch(!showSearch);

  const handleSearch = (e) => {
    e.preventDefault();

    // Match the search term with a product
    const matchedProduct = products.find(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (matchedProduct) {
      // Navigate to the Info page of the matched product
      navigate(`/info`, { state: { productId: matchedProduct.id } });
    } else {
      alert("No product found");
    }
  };

  return (
    <div className="bigHeader">
      <div className="logoDiv">
        <Link to="/" className="link-card">
          <div className="logo">HAIBO</div>
        </Link>

        <div className="elements">
          <ul>
            <li onClick={toggleSearch} className="search-icon">
              <FiSearch size={20} />
            </li>
            <Link to="/cart" className="link-card">
              <li>
                <FiShoppingCart size={20} />
              </li>
            </Link>
          </ul>
        </div>

        <div className="navigate">
          <ul>
            <Link to="/shop" className="link-card">
              <li>shop</li>
            </Link>
            <Link to="/contact" className="link-card">
              <li>contact</li>
            </Link>
            <Link to="/Aboutus" className="link-card">
              <li>about us</li>
            </Link>
            {/* Links to Sign In and Sign Up pages */}
            <Link to="/signin" className="link-card">
              <li>Sign In</li>
            </Link>
            <Link to="/signup" className="link-card">
              <li>Sign Up</li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      )}
    </div>
  );
}

export default Header;
