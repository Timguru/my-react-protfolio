import React, { useEffect, useState } from 'react'
import './asset/css/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    const [nav, setNav] = useState(false)
    useEffect(()=>{
        const navbar = document.getElementById('nav-links')
        window.onscroll = ()=>{scrollFn()}

        const scrollFn = ()=>{
            if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                navbar.style.padding = "15px"
                navbar.style.backgroundColor ="rgba(0,0,0,0.98)"
            }else{
                navbar.style.padding = "30px"
                navbar.style.backgroundColor ="rgba(0,0,0,0.5)"
            }
        }
    },[])
    return (
        <div className="navbar">
               <div className={`hamburger`}>
                    <span></span>
                </div> 
            <div className={`navbar__inner`}>
                <div className="navbar__close"><span>&times;</span></div>
                <ul className="nav__links" id="nav-links">
                    <Link to="/" className="nav__link">Home</Link>
                    <Link to="/" className="nav__link">About Me</Link>
                    <Link to="/" className="nav__link">Testimonials</Link>
                    <Link to="/contact" className="nav__link">Contact</Link>
                </ul>

            </div>
        </div>
    )
}

export default Navbar
