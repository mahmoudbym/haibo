import './style/Collection.css'
import { Link } from 'react-router-dom';
function Footer(){
    const product = { category1: 'fitness' ,category2: 'combat',category3: 'collective',category4: 'pro'  };

    return(
    <div className="footer">
            <div className='footer-shop'>
                <h3 className='footer-shop-h2'>Shop</h3>
                <Link className="link" to={`/shop?category=${product.category1}`}>

                <p className='footer-shop-p1'>
                    FITNESS 
                </p>
                </Link>

                <br />
                <Link className="link" to={`/shop?category=${product.category3}`}>
                <p className='footer-shop-p2'>
                collective sports 
                </p>
                </Link>
                <br />
                <Link className="link" to={`/shop?category=${product.category2}`}>

                <p className='footer-shop-p3'>
                combat sports
                </p>
                </Link>
            </div>
            <div className='footer-about'>
            <h3 className='footer-about-h2'>About</h3>
            <Link className="link" to={`/contact`}>
                <p className='footer-about-p1'>
                    contact me
                </p>
                </Link>
                <br />
                <Link className="link" to={`/aboutus`}>
                <p className='footer-about-p2'>
                about us 
                </p>
                </Link>


            </div>
            <div className='footer-mission'>
            <h3 className='footer-mission-h2'>Our Mission</h3>
            <p className='footer-mission-p'> 
            We are dedicated to helping our clients achieve their fitness goals with a holistic approach to decrease injury's and increase happiness. 
            </p>

            </div>
            <div className='footer-haibo'>
            <h3 className='footer-haibo-h2'>HAIBO</h3>
            </div>

    </div>
    )

}
export default Footer