import { Link } from 'react-router-dom'
import './Header.css'
import { useState } from 'react'
import Logo from '../Image/Logo.jpg'


const Header = () => {
    
    const [Search, setSearch] = useState("");
    

    return(         
    <div>
        <div className='navBar'>
            <div className='navBarContainer'>
                <div className='logo'>
                    <Link to='/'><img src={Logo} alt='logo' width={60} height={60} /></Link>
                        <h1>Anti-<span>Kupal</span></h1>                                   
                </div>


                <div className='link-icon'>
                    <Link to='/' className='link'>
                        <i class="fa fa-home" aria-hidden="true">
                        <h3>Home</h3></i>
                    </Link>
                    <Link to='/' className='link'>
                        <i class="fa fa-shopping-bag" aria-hidden="true">
                        <h3>Shopping</h3></i>
                    </Link>
                    <Link to='about' className='link'>
                        <i class="fa fa-cart-plus" aria-hidden="true">
                        <h3>Add Cart</h3></i>
                    </Link>
                </div>
                
                <div className='SearchBar'>
                    <form>
                        <input type='text' onChange={e => setSearch(e.target.value)}/>
                        <button><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>

                <div className='social-media-icon'>
                    <Link to='about' className='link'>
                        <i class="fa fa-facebook" aria-hidden="true">
                        <h3>Facebook</h3></i></Link>
                    <Link to='about' className='link'>
                        <i class="fa fa-telegram" aria-hidden="true">
                        <h3>Telegram</h3></i>
                    </Link>
                    <Link to='about' className='link'>
                        <i class="fa fa-instagram" aria-hidden="true">
                        <h3>Instagram</h3></i>
                    </Link>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Header