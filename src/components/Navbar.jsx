import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.svg'

import '../styles/App.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <nav className='navbar'>
            <div className="navbar-cont">
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img src={Logo} alt="myteam"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click? 'fas fa-times': 'fas fa-bars'  }></i>
                </div>
                <ul className={click? 'nav-menu active': 'nav-menu'}>
                    <li className="nav-item"><Link to='/' onClick={closeMobileMenu} className='nav-links' >Home</Link> </li>
                    <li className="nav-item"><Link to='/about' onClick={closeMobileMenu} className='nav-links' >About</Link> </li>
                    <button className='transparent-btn'>  <Link to='/contact' className='btn-link' style={{textDecoration: 'none', color: 'white'}}  onClick={closeMobileMenu} >Contact Us</Link></button>
            </ul>
                
            </div>
        </nav>
    )
}

export default Navbar
