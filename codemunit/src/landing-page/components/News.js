import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Arrows from './Arrows'
import CarrierImg from '../../images/intro.jpg'
import TechImg from '../../images/tech.jpeg'

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
                        <div className="carrier-news-showcase news">
                            <Arrows/>
                            <article>
                                <div className="post-description">
                                    <h2>Header of the carrier post</h2>
                                    <small>by Justin Peterson, CTO of Codemunity</small>
                                    <p>
                                        Sub description of the carrier post
                                        Sub description of the carrier post sub
                                        Sub description of the carrier post sub sub
                                        Sub description of the carrier post
                                    </p>
                                    <Link to="/">View Post</Link>
                                </div>
                                <div className="post-image">
                                    <img src={CarrierImg} alt="post"/>
                                </div>
                            </article>
                        </div>
                        <div className="technology-news-showcase news">
                            <Arrows/>
                            <article>
                            <div className="post-description">
                                    <h2>Header of the technology post</h2>
                                    <small>by Benedict Steven, CTO of Codemunity</small>
                                    <p>
                                        Sub description of the technology post
                                        Sub description of the technology post
                                        Sub description of the technology post
                                        Sub description of the technology post
                                    </p>
                                    <Link to="/">View Post</Link>
                                </div>
                                <div className="post-image">
                                    <img src={TechImg} alt="post"/>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
