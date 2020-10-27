import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './asset/css/Header.css'
import headerbg from './asset/img/headerbg.jpg'
import headerbg2 from './asset/img/headerbg2.jpg'
import headerbg3 from './asset/img/headerbg3.jpg'
import $ from 'jquery'

function Header() {
    const bgArr = [headerbg, headerbg2, headerbg3]

    // useEffect(()=>{
    //     $('.slideshow > div:gt(0)').hide()

    //     setInterval(function(){
    //         $('.slideshow > div:first')
    //         .fadeOut(1000)
    //         .next()
    //         .fadeIn(1000)
    //         .end()
    //         .appendTo('.slideshow')
    //     },3000)
    // },[])
 
    return (
        <div className="header">
            <div className="slideshow">
                {bgArr.map((bg, i)=>{
                    return(
                        <div>
                        <img className="slideshow__img" itemType="image/jpeg" key={i} src={bg} alt="headerbg"/>
                        </div> 
                    )
                })}
                <div>
            </div>
            <Navbar/>
            </div>
        </div>
    )
}

export default Header
