import  './style/homeStyle.css'
import Card from './card.jsx'
import Collection from './Collection.JSX'
import ReviewCard from './ReviewCard.jsx'
import Bar from './bar.jsx'
import Footer from './Footer.jsx'
import Cards from './cards.jsx'

import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Home(){
    const product = { category1: 'fitness' ,category2: 'combat',category3: 'collective',category4: 'pro'  };

    
    return(
        <>
    <div className='main'> 
        <div className="main-container">
            <div className='l3ayba'>
                <h3 className='l3aiba-h3'> HAIBO</h3>
                <p className='l3aiba-p'>It's Time to achieve Your Dream Physique
                </p>
                <Link to='/shop'> 
                    <button className='l3aiba-button'>EXPLORE NOW</button>
                </Link>
            </div>
        </div>
    </div>

    <h2 className='products-header'>𝐎𝐮𝐫 Champion</h2>

    <div className='products-1'>
    <Card /> 
    </div>
    
    <div className='profesional'>
        <div className='pro-photo'>

        </div>
        <div className='pro-desc'>
            <h2 className='pro-h2'>PROFESSIONAL</h2>
            <p className='pro-p'>
            Our team is working as hard as possible to give you the best sports courses out there. We're focused on making sure you get the most useful and interesting content to improve your skills.</p>

        </div>

    </div>
    <div className='profesional-2'>
        <div className='pro-desc-2'>
            <h2 className='pro-h2-2'>Adapted Meal Plans</h2>
            <p className='pro-p-2'>With Haibo's specially adapted meals, you can savor delicious food while still working towards your weight loss goals. These meals are thoughtfully designed to be both nutritious and satisfying, allowing you to enjoy a variety of flavors without compromising your progress.</p>


        </div>
        <div className='pro-photo-2'>

        </div>

    </div>
    
    <br />
    <div className='products-1'>
   
    </div>














    <h2 className=' collection-header'>Our collections</h2>
    <div className='collection-products'>



    <Link className="link" to={`/shop?category=${product.category1}`}>
    <Collection name='Fitness' />  
        </Link>

        

        <Link className="link" to={`/shop?category=${product.category2}`}>
    <Collection name='Combat Sports' />  
        </Link>
        
        <Link className="link" to={`/shop?category=${product.category3}`}>
    <Collection name='Collective Sports' />  
        </Link>
        
        <Link className="link" to={`/shop?category=${product.category4}`}>
    <Collection name='More Profesional courses' />  
        </Link>
    </div>

























    <h2 className='reviews-header'>Reviews</h2>
    <div className='reviews'>
        <ReviewCard/> <ReviewCard/>
    </div>
    <div className='review-name'>
        <div className='name-1'>
            Pedro
        </div>
        <div  className='name-2'>
            haitam
        </div>
    </div>
    <div className='slide-bar'>
        <Bar />
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        </>

    )

}
export default Home