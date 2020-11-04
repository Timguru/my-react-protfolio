import React, { useState } from 'react'
import './asset/css/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    //boolean values
    const[toggleClose , setToggleClose] = useState(false)
    const[nav, setNav] = useState(false)
    //change the boolean value of toggleClose to the opposite of the boolean value
    const hamState = () => setToggleClose(!toggleClose)
    const showNav = () => setNav(!nav)
    // set all the hamburger functions
    const hamburgerFn = ()=>{
        hamState()
        showNav()
    }
    return (
        <div className="navbar">
            <div className="hamburger" onClick={hamburgerFn}>
              <span className={toggleClose ? `hamburger__one active` : 'hamburger__one'}></span>
              <span className={toggleClose ? `hamburger__two active` : 'hamburger__two'}></span>
              <span className={toggleClose ? `hamburger__three active` : 'hamburger__three'}></span>
          </div>

            <nav className="nav">
                <ul className={nav ? `nav__links show` : `nav__links`}>
                    <li>
                        <Link to="/" className="nav__link">Home</Link>
                    </li>
                    <li>
                        <Link to="#about" className="nav__link">About Me</Link>
                    </li>
                    <li>
                        <Link to="/" className="nav__link">Testimonials</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav__link">Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar