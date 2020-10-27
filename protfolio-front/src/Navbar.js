import React from 'react'
import './asset/css/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__outer">
                <div className="hamburger">
                    <span></span>
                    {/* <span></span>
                    <span></span> */}
                </div>
                <div className="navbar__inner">
                    <Link to='/' className="nav__link">
                        Home
                </Link>
                    <Link to='/' className="nav__link">
                        About Me
                </Link>
                    <Link to='/' className="nav__link">
                        Testimonials
                </Link>
                    <Link to="/contact" className="nav__link">
                        Contact Me
                </Link>
                </div>
            </div> 
        </div>
    )
}

export default Navbar
