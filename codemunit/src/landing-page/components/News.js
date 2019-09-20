import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CarrierNews from "./CarrierNews"
import TechNews from './TechNews';

export default class News extends Component {
    render() {
        return (
            <div className="blog-news">
                <div className="container">
                    <h1>News and resources</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ullam ratione neque aperiam officiis quis incidunt omnis dolores cupiditate beatae, voluptatum voluptate nihil eum iusto, reprehenderit nostrum sint cumque quasi.</p>
                    <Link to="/">View all posts</Link>
                    <input type="radio" name="n" id="n1" checked />
                    <input type="radio" name="n" id="n2" />
                    <div className="news-header">
                        <label for="n1" className="carrier-news">
                            Carriers News
                        </label>
                        <label for="n2" className="technology-news">
                            Technology News
                        </label>
                    </div>
                    <div className="news-container">
                        <CarrierNews/>
                        <TechNews/>
                    </div>
                </div>
            </div>
        )
    }
}
