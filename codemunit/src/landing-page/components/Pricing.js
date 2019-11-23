import React, { Component } from 'react'
import { FaCheck,  GoX } from "react-icons/all"

export default class Pricing extends Component {
    render() {
        return (
            <div className="pricing" id="pricing">
                <div className="container">
                    <div className="header">
                        <h1 className="header">Pricing</h1>
                    </div>
                    <div className="pricing-showcase">
                        <article className="pricing-description">
                            <h1>Hello pricing</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eligendi quia consequatur, veniam doloribus veritatis sint voluptatem nulla nobis dicta pariatur. Dolor laboriosam vero labore tempora, veritatis totam maiores voluptatum.
                            </p>
                            <h3>Select your plan</h3>
                            <div className="btn-plan">
                                <button className="active">Monthly</button>
                                <button>Annually</button>
                            </div>
                        </article>
                        <div className="pricing-cards">
                            <article className="freemium card">
                                <h2>Freemium</h2>
                                <div className="price">
                                    <span>
                                        Free
                                    </span>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li>Curriculum <span><FaCheck /></span></li>
                                        <li>Projects <span><GoX/></span></li>
                                        <li>Mentorship <span><GoX /></span></li>
                                        <li>Access to Community Hub <span><GoX /></span></li>
                                    </ul>
                                </div>
                                <div className="btn-subscribe">
                                    <button className="btn-primary">Subscribe Now</button>
                                </div>
                            </article>
                            <article className="premium card">
                                <h2>Premium</h2>
                                <div className="price">
                                    <span>
                                        $20/month
                                    </span>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li>Curriculum <span><FaCheck/></span></li>
                                        <li>Projects <span><FaCheck /></span></li>
                                        <li>Mentorship <span><FaCheck /></span></li>
                                        <li>Access to Community Hub <span><FaCheck /></span></li>
                                    </ul>
                                </div>
                                <div className="btn-subscribe">
                                    <button className="btn-primary">Subscribe Now</button>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
