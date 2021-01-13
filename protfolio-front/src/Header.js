import React, { useEffect} from 'react'
import Navbar from './Navbar'
import './asset/css/Header.css'
import DetailProp from './DetailProp'
import videoBg from './asset/videobg/video.mp4'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    const vid = () => {return false}

    useEffect(()=>{
        const navbar = document.getElementById('nav-container')
        const query = window.matchMedia("(min-width: 768px)")
        window.onscroll = function(){scrollFn(query)}
        function scrollFn(x){
            if(x.matches) {
                if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
                    navbar.style.padding = "15px"
                    navbar.style.backgroundColor = "rgba(252, 102, 51, 1)"
                }else{
                    navbar.style.padding = "30px"
                    navbar.style.backgroundColor = "rgba(252, 102, 51, 0.5)"
                }
            }
        }

        query.addEventListener("change", scrollFn)
       
    },[])

    return (
        <div className="header">
            {/* <img className="header__bg" src={bg} alt=""/> */}
            <video className="header__bg" onContextMenu={vid} playsInline autoPlay loop muted src={videoBg} type="video/mp4"/>
            <div className="nav__container" id="nav-container">
                <Navbar/>
            </div>
            <div className="header__details">
            <DetailProp
            linkedln="#"
            github="#"
            facebook="#"
            instagram="#"
            whatsapp="#"/>
             
            </div>
            <div className="header__bottom">
            <ExpandMoreIcon style={{ color : '#fff'}} fontSize="large"/>
            </div>
        </div>
    )
}

export default Header
