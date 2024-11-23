import './style/Collection.css'
import { Link } from 'react-router-dom'
function animation(){
    return(
        <Link to='/home' className='link-card link1'> 
                <div className="animation">
            <h2 className='animation-h2'>
                HAIBO
            </h2>
        </div>
        </Link>
    )
}
export default animation