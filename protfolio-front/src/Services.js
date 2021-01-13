import React from 'react'
import './asset/css/Services.css'
import Service from './Service'
const im = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbXB1dGVyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
function Services() {
    return (
        <div className="services">
            <div className="services__top">
                <h1><i>Services I offer</i></h1>
                <hr/>
            </div>
            
            <div class="services__main">
                <Service
                image={im}
                name ="Web design"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aliquam sunt, esse placeat porro enim similique autem quisquam excepturi 
                reiciendis. Nobis aspernatur est, itaque error sint eaque praesentium earum asperiores architecto."/>
                 <Service
                image={im}
                name ="Web design"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aliquam sunt, esse placeat porro enim similique autem quisquam excepturi 
                reiciendis. Nobis aspernatur est, itaque error sint eaque praesentium earum asperiores architecto."/>
                 <Service
                image={im}
                name ="Web design"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aliquam sunt, esse placeat porro enim similique autem quisquam excepturi 
                reiciendis. Nobis aspernatur est, itaque error sint eaque praesentium earum asperiores architecto."/>
                <Service
                image={im}
                name ="Web design"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aliquam sunt, esse placeat porro enim similique autem quisquam excepturi 
                reiciendis. Nobis aspernatur est, itaque error sint eaque praesentium earum asperiores architecto."/>
                <Service
                image={im}
                name ="Web design"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aliquam sunt, esse placeat porro enim similique autem quisquam excepturi 
                reiciendis. Nobis aspernatur est, itaque error sint eaque praesentium earum asperiores architecto."/>
                <Service
                image={im}
                name ="Web design"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aliquam sunt, esse placeat porro enim similique autem quisquam excepturi 
                reiciendis. Nobis aspernatur est, itaque error sint eaque praesentium earum asperiores architecto."/>
            </div>
            
        </div>
    )
}

export default Services
