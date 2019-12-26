import React, { useState } from "react"
import { Switch, Route, Router, Link, useParams, useRouteMatch } from "react-router-dom"
import { FaAngleRight } from "react-icons/all"
import Html from "../pages/html"

const SideNav = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
                {/* <div className="nav-header">
                    hello world
                    <hr/>
                </div> */}
                <ul className="main-ul">
                    <li>
                        <FaAngleRight className="icon"/> Full stack web development
                    </li>
                    <div>
                        <ul>
                            <li className="active">
                                <FaAngleRight className="icon"/> Programming
                            </li>
                            <div>
                                <ul>
                                    <li className="anchor">
                                        <Link to="/">What is programming?</Link>
                                    </li>
                                    <li className="anchor">
                                        <Link to="/">Git and How Git Works.</Link>
                                    </li>
                                </ul>
                            </div>
                            <li>
                                <FaAngleRight className="icon"/> Getting started with the Web
                            </li>
                            <div>
                                <ul>
                                    <li className="anchor">
                                        <Link>What is the internet?</Link>
                                    </li>
                                    <li className="anchor">
                                        <Link>What is a web?</Link>
                                    </li>
                                </ul>
                            </div>
                            <li>
                                <FaAngleRight className="icon"/> Front-end web development
                            </li>
                            <div>
                                <ul>
                                    <li className="anchor">
                                        <Link to={`${url}/html`}>Html</Link>
                                    </li>
                                    <li className="anchor">
                                        <Link to="/curriculum/web-development/css">Css</Link>
                                    </li>
                                    <li>
                                        <FaAngleRight className="icon"/> Css frameworks and responsive design
                                    </li>
                                    <div>
                                        <ul>
                                            <li className="anchor">
                                                <Link to="/curriculum/web-development/responsive-web-design-with-media-queries">Responsive web design with media queries</Link>
                                            </li>
                                            <li className="anchor">
                                                <Link to="/curriculum/web-development/bootstrap">Bootstrap</Link>
                                            </li>
                                            <li className="anchor">
                                                <Link to="/curriculum/web-development/sass">Sass</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <li className="anchor">
                                        <Link to="/curriculum/web-development/javascript">Javascript</Link>
                                    </li>
                                    <li className="anchor">
                                        <Link to="/curriculum/web-development/advanced-html5">Advanced HTML5</Link>
                                    </li>
                                    <li>
                                        <FaAngleRight className="icon"/> Front-end Frameworks
                                    </li>
                                    <div>
                                        <ul>
                                            <li className="anchor">
                                                <Link to="/curriculum/web-development/react-js">ReactJs</Link>
                                            </li>
                                            <li className="anchor">
                                                <Link to="/curriculum/web-development/angular">AngularJs</Link>
                                            </li>
                                            <li className="anchor">
                                                <Link to="/curriculum/web-development/jquery">jQuery</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </ul>
                            </div>
                            <li>
                                <FaAngleRight className="icon" /> Back-end web development
                            </li>
                            <div>
                                <ul>
                                    <li className="anchor">
                                        <Link to="/curriculum/web-development/node-js">Node js</Link>
                                    </li>
                                    <li className="anchor">
                                        <Link to="/curriculum/web-development/php">Php</Link>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                    <li>
                        <FaAngleRight className="icon"/> UI/UX Design
                    </li>
                    <li>
                        <FaAngleRight className="icon"/> Mobile App Development
                    </li>
                    <li>
                        <FaAngleRight className="icon"/> Data Science
                    </li>
                    <li>
                        <FaAngleRight className="icon"/> Artificial Intelligence
                    </li>
                </ul>
                
            </div>
    )
}

export default SideNav