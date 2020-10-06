import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.svg'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <nav>
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
                </ul>
                <Link to='/contact'  onClick={closeMobileMenu} ><button>Contact Us</button></Link>
            </div>
        </nav>
    )
}

export default Navbar
