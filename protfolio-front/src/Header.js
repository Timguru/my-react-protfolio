import React, { useEffect, useState} from 'react'
import Navbar from './Navbar'
import './asset/css/Header.css'
import headerbg from './asset/img/headerbg.jpg'
import headerbg2 from './asset/img/headerbg2.jpg'
import headerbg3 from './asset/img/headerbg3.jpg'
// import $ from 'jquery'

function Header() {
    const [bg, setBg] = useState()

    useEffect(()=>{
    //     $('.slideshow > div:gt(0)').hide()

    //     setInterval(function(){
    //         $('.slideshow > div:first')
    //         .fadeOut(1000)
    //         .next()
    //         .fadeIn(1000)
    //         .end()
    //         .appendTo('.slideshow')
    //     },3000)
    const bgArr = [headerbg, headerbg2, headerbg3]
    const random = Math.floor(Math.random()* bgArr.length)
    setBg(bgArr[random])

    },[bg])
 
    return (
        <div className="header">
            <img className="header__bg" src={bg} alt=""/>
            <Navbar/>
        </div>
    )
}

export default Header
