import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css"
import {FaProjectDiagram, FaNetworkWired, FaServicestack, GoProject} from 'react-icons/all'

export default class Service extends Component {
        state = {
            services:[
            {
                // index:0,
                icon:<FaNetworkWired className="service-icon"/>,
                title: "Courses",
                subtitle: "Learn anywhere, anytime, at your own pace",
                description: "We offer free courses but one can opt to join premium membership to get more resources on the course.",
                link: "/service1"
            },
            {
                // index:1,
                icon:<FaProjectDiagram className="service-icon"/>,
                title: "Projects",
                subtitle: "subservice 2",
                description: "description for service 2... a whole bunch of paragraph",
                link: "/service1"
            },
            {
                // index:0,
                icon:<FaServicestack className="service-icon"/>,
                title: "Mentorship",
                subtitle: "subservice 3",
                description: "description for service 3... a whole bunch of paragraph",
                link: "/service1"
            },
            {
                // index:3,
                icon:<GoProject className="service-icon"/>,
                title: "Community hub",
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
                   We provide learning resources, guidance and mentorship to software development learners and help them secure remote software development jobs.
                   </p>
                   <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' style={{
                               animationDelay: "0.2s",
                               animationDuration: "0.2s"
                           }}>
                   <div className="services-showcase">{this.state.services.map((item,index) => {
                       return <article key={index} className="animated fadeIn delay-2s">
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
                                    <Link to="/">Learn more</Link>
                                </div>
                       </article>
                       })}
                   </div>
                   </ScrollAnimation>
               </div>
            </div>
        )
    }
}
