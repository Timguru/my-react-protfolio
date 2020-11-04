import React from 'react'
import {IconButton} from '@material-ui/core'
import {Facebook, LinkedIn,WhatsApp, GitHub,Instagram} from '@material-ui/icons'
import './asset/css/DetailProp.css'

function DetailProp({facebook, github, linkedln, instagram, whatsapp}) {
    return (
        <div className="details">
            <div className="details__top">
            <h1 className="name">Timothy Mugo</h1>
            <p className="description">I am a Kenyan based fullstack MERN and LAMP developer with UI/UX skills
                currently working with ProsTranscription and working as a freelancer during my free time </p>
            </div>
            <div class="details__bottom">
                <a href={linkedln}>
                    <IconButton>
                        <LinkedIn fontSize="large" className="detail__icon"/>
                    </IconButton>
                </a>
                <a href={github}>
                    <IconButton>
                        <GitHub fontSize="large" className="detail__icon"/>
                    </IconButton>
                </a>
                <a href={instagram}>
                    <IconButton>
                        <Instagram fontSize="large" className="detail__icon"/>
                    </IconButton>
                </a>
                <a href={facebook}>
                    <IconButton>
                        <Facebook fontSize="large" className="detail__icon"/>
                    </IconButton>
                </a>
                <a href={whatsapp}>
                    <IconButton>
                        <WhatsApp fontSize="large" className="detail__icon"/>
                    </IconButton>
                </a>
            </div>
            
            
        </div>
    )
}

export default DetailProp
