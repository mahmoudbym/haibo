import { products } from './json';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/homeStyle.css';

function Shop() {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const queryParams = new URLSearchParams(window.location.search);  // Use window.location here
  const cate = queryParams.get('category');  

  const [category, setCategory] = useState('all');

  const click = (prompt) => {
    setCategory(prompt);
  };

  useEffect(() => {
    if (cate !== null) {
      setCategory(cate); // Updates category when 'cate' is not null
    }
  }, [cate]);

  const handleNavigate = (productId) => {
    navigate(`/info`, { state: { productId } });  // Passing productId in the state
  };

  return (
    <>
      <div className='shop-list-div'> 
        <ul className='shop-ul'>
          <li id='all' onClick={() => click('all')}>All products</li>
          |
          <li id='collective' onClick={() => click('collective')}>Collective sports</li>
          |
          <li id='combat' onClick={() => click('combat')}>Combat sports</li>
          |
          <li id='pro' onClick={() => click('pro')}>Professional courses</li>
          |
          <li id='fitness' onClick={() => click('fitness')}>Fitness</li>
          |
          <li id='other' onClick={() => click('other')}>Other</li>
        </ul>
      </div>
      
      <div className='div-bigboss'>
        <div className='div-boss'>
          {products.map((product, index) => {
            if (product.category === category || category === 'all') {
              return (
                <div
                  key={index}
                  className='card-mom'
                  onClick={() => handleNavigate(product.id)} // Navigate when the card is clicked
                >
                  <div
                    style={{
                      backgroundImage: `url(${product.img})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      position: 'center',
                      margin: '0 auto',
                      top: '15px',
                      width: '50vh',
                      height: '50vh',
                      backgroundColor: 'black',
                      borderRadius: '12px',
                    }}
                  ></div>

                  <h2 className='card-p'>{product.name} </h2>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}

export default Shop;
