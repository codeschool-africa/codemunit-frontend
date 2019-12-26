import React, { Component } from 'react'
import { FaAngleRight } from "react-icons/all"
import { Link } from "react-router-dom"

export default class SideNav extends Component {
    state = {
        isWeb: false,
        isUi: false,
        isMobile: false,
        isDataScience: false,
        isAi: false,
        isWebDropdown: false,
        isProgramming: false,
        isWebstarter: false,
        isFrontend: false,
        isCssFrameWork: false,
        isFrontEndFramework: false,
        isBackend: false
    }

    showWeb = () => {
        this.setState({ isWeb: !this.state.isWeb });
    }

    showProg =() => {
        this.setState({ isProgramming: !this.state.isProgramming })
    }

    showWebStart = () => {
        this.setState({ isWebstarter: !this.state.isWebstarter })
    }

    showFrontEnd = () => {
        this.setState({ isFrontend: !this.state.isFrontend})
    }

    showFrontEndFramework = () => {
        this.setState({ isFrontEndFramework: !this.state.isFrontEndFramework})
    }

    showBackEnd = () => {
        this.setState({ isBackend: !this.state.isBackend })
    }

    showCssFramework = () => {
        this.setState({ isCssFrameWork: !this.state.isCssFrameWork })
    }

    render() {
        return (
            <div>
                <ul className="main-ul">
                    <li onClick={() => this.showWeb()}
                        className={this.state.isWeb ? "active" : ""}>
                        <FaAngleRight className="icon"/> Full stack web development
                    </li>
                    <div className={this.state.isWeb
                        ? "dropdown dropdown-active sub-section-1"
                        : "dropdown sub-section-1"}>
                        <ul>
                            <li onClick={() => this.showProg()}
                                className={this.state.isProgramming ? "active" : ""}>
                                <FaAngleRight className="icon"/> Programming
                            </li>
                            <div className={this.state.isProgramming
                                ? "dropdown dropdown-active sub-section-2"
                                : "dropdown sub-section-2"}>
                                <ul>
                                    <li className="anchor">
                                        <Link to="/">What is programming?</Link>
                                    </li>
                                    <li className="anchor">
                                        <Link to="/">Git and How Git Works.</Link>
                                    </li>
                                </ul>
                            </div>
                            <li onClick={() => this.showWebStart()} className={this.state.isWebstarter ? "active" : ""} >
                                <FaAngleRight className="icon"/> Getting started with the Web
                            </li>
                            <div className={this.state.isWebstarter
                                ? "dropdown dropdown-active sub-section-2"
                                : "dropdown sub-section-2"}>
                                <ul>=
                                    <li className="anchor">
                                        <Link>What is the internet?</Link>
                                    </li>
                                    <li className="anchor">
                                        <Link>What is a web?</Link>
                                    </li>
                                </ul>
                            </div>
                            <li onClick={() => this.showFrontEnd()} className={this.state.isFrontend? "active" : ""}>
                                <FaAngleRight className="icon"/> Front-end web development
                            </li>
                            <div className={this.state.isFrontend
                                ? "dropdown dropdown-active sub-section-2"
                                : "dropdown sub-section-2"}>
                                <ul>
                                    <li className="anchor">
                                        <Link to="/curriculum/web-development/html">Html</Link>
                                    </li>
                                    <li className="anchor">
                                        <Link to="/curriculum/web-development/css">Css</Link>
                                    </li>
                                    <li onClick={() => this.showCssFramework()} className={this.state.isCssFrameWork ? "active" : ""}>
                                        <FaAngleRight className="icon"/> Css frameworks and responsive design
                                    </li>
                                    <div className={this.state.isCssFrameWork
                                        ? "dropdown dropdown-active sub-section-3"
                                        : "dropdown sub-section-3"}>
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
                                    <li onClick={() => this.showFrontEndFramework()} className={this.state.isFrontEndFramework ? "active" : ""}>
                                        <FaAngleRight className="icon"/> Front-end Frameworks
                                    </li>
                                    <div className={this.state.isFrontEndFramework
                                        ? "dropdown dropdown-active sub-section-3"
                                        : "dropdown sub-section-3"}>
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
                            <li onClick={() => this.showBackEnd()} className={this.state.isBackend ? "active" : ""}>
                                <FaAngleRight className="icon" /> Back-end web development
                            </li>
                            <div className={this.state.isBackend
                                ? "dropdown dropdown-active sub-section-2"
                                : "dropdown sub-section-2"}>
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
}
