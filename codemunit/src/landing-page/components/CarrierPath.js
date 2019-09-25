import React, { Component } from 'react'
import Brain from "../../images/brain.png"
import { Link } from 'react-router-dom'

export default class CarrierPath extends Component {
    render() {
        return (
            <div className="carrier-path">
                <div className="container">
                    <div className="carrier-header">
                        {/* This is a header nav where users can click to choose if they choose carrier like web dev or specific language  */}
                        <div className="carriers">
                            <h2>Choose your carrier</h2>
                        </div>
                        <div className="languages">
                            <h2>Choose your language</h2>
                        </div>
                    </div>
                    <article>
                        <img src={Brain} alt="brain"/>
                    </article>
                    <article>
                        <div className="description">
                            {/* <h2>
                                carrier title
                            </h2>
                            <p>
                                carrier description... a whole bunch of paragraph
                            </p>
                            <Link to="/">Take this path</Link> */}
                        </div>
                        <div className="img"></div>
                    </article>
                    {/* toDO list
                          i) create a slider for different carrier paths with different colors etc
                         ii) create a blog section with exceptional styles and everything... 
                        iii) work on responsiveness of the page
                         iv) to create images with figma with different styles etc
                          v) need africa with tz country borders or world maps as backgrounds
                         vi) remaining with testimonial section and sponsors to customize
                        vii) i gotta work hard on everything i've wanted to do tomorrow
                    */}
                </div>
            </div>
        )
    }
}
