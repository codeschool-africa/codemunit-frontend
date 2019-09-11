import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {FaProjectDiagram, FaNetworkWired, FaServicestack, GoProject} from 'react-icons/all'

export default class Service extends Component {
        state = {
            services:[
            {
                // index:0,
                icon:<FaNetworkWired className="service-icon"/>,
                title: "service 1",
                subtitle: "subservice 1",
                description: "description for service 1... a whole bunch of paragraph",
                link: "/service1"
            },
            {
                // index:1,
                icon:<FaProjectDiagram className="service-icon"/>,
                title: "service 2",
                subtitle: "subservice 2",
                description: "description for service 2... a whole bunch of paragraph",
                link: "/service1"
            },
            {
                // index:0,
                icon:<FaServicestack className="service-icon"/>,
                title: "service 3",
                subtitle: "subservice 3",
                description: "description for service 3... a whole bunch of paragraph",
                link: "/service1"
            },
            {
                // index:3,
                icon:<GoProject className="service-icon"/>,
                title: "service 4",
                subtitle: "subservice 4",
                description: "description for service 4... a whole bunch of paragraph",
                link: "/service1"
            }
        ]
    }
    render() {
        return (
            <div className='service' id='service'>
               <div className="container">
                   <h1>Services</h1>
                   <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsum maxime debitis non 
                   </p>
                   <div className="services-showcase">{this.state.services.map((item,index) => {
                       return <article key={index}>
                            <div className="front-face">
                                {item.icon}
                                <h2>{item.title}</h2>
                            </div>
                            <div className="hovered-face">
                                <h3>
                                    {item.subtitle}
                                </h3>
                                <p>
                                    {item.description}
                                </p>
                                <Link to="">Learn more</Link>
                            </div>
                       </article>
                       })}
                   </div>
               </div>
            </div>
        )
    }
}
