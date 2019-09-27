import React, { Component } from 'react'
import Brain from "../../images/brain.png"
// import { Link } from 'react-router-dom'

export default class CarrierPath extends Component {
    render() {
        return (
            <div className="carrier-path">
                <div className="container">
                    <div className="carrier-header">
                        <h1>Codemunit Curriculum</h1>
                        <p>
                            World class curriculum
                        </p>
                    </div>
                    <article>
                        <section className="image">
                            <img src={Brain} alt="brain network"/>
                        </section>
                        <section className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet enim nihil at repellat. Architecto a laborum adipisci, impedit placeat, pariatur repellendus corrupti, soluta mollitia et ea tenetur dolore saepe minus?
                        </section>
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
                <div className="after"></div>
            </div>
        )
    }
}
