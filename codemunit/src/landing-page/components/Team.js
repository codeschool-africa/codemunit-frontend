import React, { Component } from 'react'
import profile from '../../images/profile.png'
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/all'

export default class Team extends Component {
    render() {
        return (
            <div className="team">
                <div className="container">
                    <h1>The team</h1>
                    <div className="show-case">
                        <article className="team-show the-team">
                            <section className="section-dp">
                                <img src={profile} alt="CTO of codemunit"/>
                            </section>
                            <section className="section-description">
                                <h2>Justin Peterson Mahinyila</h2>
                                <h3>CO-Founder and CTO of Codemunit</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quisquam excepturi ducimus, eveniet quidem cumque. Debitis, laudantium ipsa! Eveniet architecto doloribus quia labore non quibusdam atque expedita a omnis et!
                                </p>
                                <div className="social-container">
                                    <a href="https://www.facebook.com"><FaFacebookF className='icon'/></a>
                                    <a href="https://www.twitter.com"><FaTwitter className='icon'/></a>
                                    <a href="https://www.instagram.com"><FaInstagram className='icon'/></a>
                                    <a href="https://www.linkedin.com"><FaLinkedinIn className='icon'/></a>
                                </div>
                            </section>
                        </article>
                        <article className="team-show the-team">
                            <section className="section-description">
                                <h2>Benedict Steven Mwinuka</h2>
                                <h3>CO-Founder and CTO of Codemunit</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quisquam excepturi ducimus, eveniet quidem cumque. Debitis, laudantium ipsa! Eveniet architecto doloribus quia labore non quibusdam atque expedita a omnis et!
                                </p>
                                <div className="social-container">
                                    <a href="https://www.facebook.com"><FaFacebookF className='icon'/></a>
                                    <a href="https://www.twitter.com"><FaTwitter className='icon'/></a>
                                    <a href="https://www.instagram.com"><FaInstagram className='icon'/></a>
                                    <a href="https://www.linkedin.com"><FaLinkedinIn className='icon'/></a>
                                </div>
                            </section>
                            <section className="section-dp">
                                <img src={profile} alt="CTO of codemunit"/>
                            </section>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}
