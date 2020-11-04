import React, { useEffect, useState } from 'react'
import './asset/css/Navbar.css'
import { Link } from 'react-router-dom'
import {Button, IconButton} from '@material-ui/core'

function Navbar() {
    const[toggleClose , setToggleClose] = useState(false)
    const hamState =()=> setToggleClose(!toggleClose)
    return (
        <div className="navbar">
          <div className="hamburger" onClick={hamState}>
              <span className={toggleClose ? `hamburger__one active` : 'hamburger__one'}></span>
              <span className={toggleClose ? `hamburger__two active` : 'hamburger__two'}></span>
              <span className={toggleClose ? `hamburger__three active` : 'hamburger__three'}></span>
          </div>
           
            <nav className="nav">
                <ul className="nav__links">
                    <li>
                        <Link className="nav__link" to="/">Home</Link>
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
