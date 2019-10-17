import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram} from "react-icons/all"
import Picture from "../../images/intro.jpg"

export default class Newssummary extends Component {
    render() {
        return (
                    <article>
                        <div className="post-image">
                            <img src={Picture} alt="post"/>
                        </div>
                        <div className="post-description">
                            <h2>Introduction to community hub</h2>
                            <small>by Justine Peterson, 30 October 2019</small>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <Link to="/blog/post">Read the story</Link>
                            <div className="share">
                                <h3>Share:</h3>
                                <div className="social-container">
                                    <a href="www.facbook.com"><FaFacebookF className="icon"/></a>
                                    <a href="www.twitter.com"><FaTwitter className="icon"/></a>
                                    <a href="www.instagram.com"><FaInstagram className="icon"/></a>
                                </div>
                            </div>
                        </div>
                    </article>
        )
    }
}
