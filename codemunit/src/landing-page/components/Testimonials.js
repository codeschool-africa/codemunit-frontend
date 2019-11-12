import React, { Component } from 'react'
import dummy from "../../images/dummy.jpeg"
import { FaQuoteLeft, FaTwitter } from "react-icons/all"

export default class Testimonials extends Component {
    constructor (props) {
        super(props);
        this.state = {
            testimonies: [
                {
                    index: 0,
                    quote: "Lorem ipsum dolor sit amet codemunit consectetur adipisicing elit. Asperiores, similique! Aperiam ducimus molestias consectetur neque temporibus eius iure ullam necessitatibus accusantium fugiat! Magnam maxime minus illo veritatis cumque quis excepturi.",
                    twitterSrc: "/",
                    name: "John doe",
                    twitterUsername: "johndoe",
                },
                {
                    index: 1,
                    quote: "Lorem ipsum dolor sit amet codemunit consectetur adipisicing elit. Asperiores, similique! Aperiam ducimus molestias consectetur neque temporibus eius iure ullam necessitatibus accusantium fugiat! Magnam maxime minus illo veritatis cumque quis excepturi.",
                    twitterSrc: "/",
                    name: "Sarah David",
                    twitterUsername: "sarahdave",
                },
                {
                    index: 2,
                    quote: "Lorem ipsum dolor sit amet codemunit consectetur adipisicing elit. Asperiores, similique! Aperiam ducimus molestias consectetur neque temporibus eius iure ullam necessitatibus accusantium fugiat! Magnam maxime minus illo veritatis cumque quis excepturi.",
                    twitterSrc: "/",
                    name: "Felisia Thomas",
                    twitterUsername: "fei_tom",
                },
                {
                    index: 3,
                    quote: "Lorem ipsum dolor sit amet codemunit consectetur adipisicing elit. Asperiores, similique! Aperiam ducimus molestias consectetur neque temporibus eius iure ullam necessitatibus accusantium fugiat! Magnam maxime minus illo veritatis cumque quis excepturi.",
                    twitterSrc: "/",
                    name: "Alicia Esteem",
                    twitterUsername: "allyesteem",
                },
                {
                    index: 3,
                    quote: "Lorem ipsum dolor sit amet codemunit consectetur adipisicing elit. Asperiores, similique! Aperiam ducimus molestias consectetur neque temporibus eius iure ullam necessitatibus accusantium fugiat! Magnam maxime minus illo veritatis cumque quis excepturi.",
                    twitterSrc: "/",
                    name: "Alicia Esteem",
                    twitterUsername: "allyesteem",
                }
            ]
        }
    }

    render() {
        return (
            <div className="testimonials">
                <div className="container">
                    <h1 className="header">Testimonial</h1>
                    <div className="show-case">
                        {this.state.testimonies.map((item, index) => {
                            return <article key={index} data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                                <img src={dummy} alt="" />
                                <p>
                                    <FaQuoteLeft className="icon" />
                                    {item.quote}
                                </p>
                                <div className="witness">
                                    <a href={item.twitterSrc}><FaTwitter /> @{item.twitterUsername}</a>
                                    <small>{item.name}</small>
                                </div>
                            </article>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
