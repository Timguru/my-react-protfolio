import React, { useState } from 'react'
import './asset/css/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    const[toggleClose , setToggleClose] = useState(false)
    const[nav, setNav] = useState(false)
    const[rmv, setRmv] = useState(true)
    
    
    const hamState = () => setToggleClose(!toggleClose)
    const showNav = () => setNav(!nav)
    const showLinks = ()=> setRmv(!rmv)
    const hamburgerFn = ()=>{
        hamState()
        showNav()
        showLinks()
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
                    <li className="links">
                        <Link to="/" className={`nav__link ${rmv  ? `rmvdli` : ``}`}>Home</Link>
                    </li>
                    <li className="links">
                        <Link to="#about" className={`nav__link ${rmv  ? `rmvdli` : ``}`}>About Me</Link>
                    </li>
                    <li className="links">
                        <Link to="/" className={`nav__link ${rmv  ? `rmvdli` : ``}`}>Testimonials</Link>
                    </li>
                    <li className="links">
                        <Link to="/contact" className={`nav__link ${rmv  ? `rmvdli` : ``}`}>Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar