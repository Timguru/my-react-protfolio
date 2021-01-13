import React from 'react'
import PropTypes from 'prop-types'
import './asset/css/service.css'

function Service({image, name, description}) {
    return (
        <div className="service">
            {/* <div className="service__top">
                <img src={image} alt=""/>
            </div> */}
             <div className="service__bottom">
                <h2>{name}</h2>
                <p>{description}</p>
             </div>
            
        </div>
    )
}

Service.propTypes = {
    image : PropTypes.string,
    name : PropTypes.string,
    description : PropTypes.string
}


export default Service
