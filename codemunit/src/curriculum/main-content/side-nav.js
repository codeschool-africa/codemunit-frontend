import React, { Component } from 'react'
import { FaAngleRight } from "react-icons/all"
import { Link } from "react-router-dom"

export default class SideNav extends Component {
    render() {
        return (
            <div>
                <div className="nav-header">
                    hello world
                    <hr/>
                </div>
                <ul className="main-ul">
                    <li className="active">
                        <FaAngleRight className="icon"/> Full stack web development
                    </li>
                    <div className="web-dropdown sub-section-1">
                        <ul>
                            <li>
                                <FaAngleRight className="icon"/> Programming
                            </li>
                            <div className="programming-sections sub-section-2">
                                <ul>
                                    <li>
                                        <Link to="/">What is programming?</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Git and How Git Works.</Link>
                                    </li>
                                </ul>
                            </div>
                            <li>
                                <FaAngleRight className="icon"/> Getting started with the Web
                            </li>
                            <div className="programming-sections sub-section-2">
                                <ul>
                                    <li>
                                        <Link>What is the internet?</Link>
                                    </li>
                                    <li>
                                        <Link>What is a web?</Link>
                                    </li>
                                </ul>
                            </div>
                            <li>
                                <FaAngleRight className="icon"/> Front-end web development
                            </li>
                            <div className="programming-sections sub-section-2">
                                <ul>
                                    <li>
                                        <Link to="/curriculum/web-development/html">Html</Link>
                                    </li>
                                    <li>
                                        <Link to="/curriculum/web-development/css">Css</Link>
                                    </li>
                                    <li>
                                        <Link to="/curriculum/web-development/css-frameworks-and-responsive-design">Css frameworks and responsive design</Link>
                                    </li>
                                    <li>
                                        <Link to="/curriculum/web-development/javascript">Javascript</Link>
                                    </li>
                                    <li>
                                        <Link to="/curriculum/web-development/advanced-html5">Advanced HTML5</Link>
                                    </li>
                                    <li>
                                        <FaAngleRight className="icon"/> Front-end Frameworks
                                    </li>
                                    <div className="sub-section-3">
                                        <ul>
                                            <li>
                                                <Link to="/curriculum/web-development/react-js">ReactJs</Link>
                                            </li>
                                            <li>
                                                <Link to="/curriculum/web-development/angular">AngularJs</Link>
                                            </li>
                                            <li>
                                                <Link to="/curriculum/web-development/jquery">jQuery</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </ul>
                            </div>
                            <li>
                                <FaAngleRight className="icon" /> Back-end web development
                            </li>
                            <div className="sub-section-2">
                                <ul>
                                    <li>
                                        <Link to="/curriculum/web-development/node-js">Node js</Link>
                                    </li>
                                    <li>
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
}
