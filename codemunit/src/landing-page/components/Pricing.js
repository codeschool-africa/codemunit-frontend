import React, { Component } from 'react'
import { FaCheck,  GoX } from "react-icons/all"

export default class Pricing extends Component {

    state = {
        isMonthly: true
    }

    setMonthly = () => {
        this.setState({isMonthly: true});
    }

    setAnnually = () => {
        this.setState({ isMonthly: false });
    }

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
                                <button className={this.state.isMonthly? "active": ""} onClick={this.setMonthly}>Monthly</button>
                                <button className={!this.state.isMonthly ? "active" : ""} onClick={this.setAnnually}>Annually</button>
                            </div>
                        </article>
                        <div className="pricing-cards">
                            <article className="freemium card">
                                <h2>Freemium</h2>
                                <div className="price">
                                    <span className="span">
                                        Free
                                    </span>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li>Curriculum <span><FaCheck className="icon"/></span></li>
                                        <li>Projects <span><GoX className="icon icon-x"/></span></li>
                                        <li>Mentorship <span><GoX className="icon icon-x"/></span></li>
                                        <li>Access to Community Hub <span><GoX className="icon icon-x"/></span></li>
                                    </ul>
                                </div>
                                <div className="btn-subscribe">
                                    <button className="btn-primary">Subscribe</button>
                                </div>
                            </article>
                            <article className="premium card">
                                <h2>Premium</h2>
                                <div className="price">
                                    <span className="span">
                                        <span className="span-worth">{this.state.isMonthly? "$20": "$200"}</span>/{this.state.isMonthly? "Monthly": "Annually"}
                                    </span>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li>Curriculum <span><FaCheck className="icon"/></span></li>
                                        <li>Projects <span><FaCheck className="icon"/></span></li>
                                        <li>Mentorship <span><FaCheck className="icon"/></span></li>
                                        <li>Access to Community Hub <span><FaCheck className="icon"/></span></li>
                                    </ul>
                                </div>
                                <div className="btn-subscribe">
                                    <button className="btn-primary">Subscribe</button>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
