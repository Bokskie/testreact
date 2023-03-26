import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {

    return(
        <div className='Sidebar'>
            <i class="fa fa-bars" aria-hidden="true"></i>

            <div className='sidebar-option'>
                <h1>Categories</h1>
                <Link to='/' className='sidebar-icon'>All Products</Link>
                <Link to='MenClothing' className='sidebar-icon'>Men's Clothing</Link>
                <Link to='/' className='sidebar-icon'>Women's Clothing</Link>
                <Link to='/' className='sidebar-icon'>Shorts M & W</Link>
                <Link to='/' className='sidebar-icon'>Bags & Accessories</Link>
                <Link to='/' className='sidebar-icon'>Jewelry's</Link>
            </div>
        </div>

    )

}

export default Sidebar