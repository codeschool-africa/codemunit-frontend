import React, { Component } from 'react'
// import { Route, Switch } from 'react-router-dom'
// import AuthRoute from "../util/AuthRoute"
// import Html from "./pages/html"

import { NProgress } from '@tanem/react-nprogress'

//components
import Spinner from "../components/content-loader/spinner"
import Container from "../components/content-loader/container"

//components

import Header from "./components/Header"
import SideNav from "./main-content/sidenav"
import Main from "./main-content/main-content"

import "../styles/curriculum/style.css"

// import logo from "../images/black-logo.png"
// import profile from "../images/profile.png"
import { Link } from 'react-router-dom'
// import { FaSearch, FaAngleDown } from "react-icons/all"


const callFakeAPI = delay =>
    new Promise(resolve => {
        setTimeout(resolve, delay)
    })
export default class Curriculum extends Component {
    state = {
        isOpen: false,
        isNavOpen: false,
        isLoading: true
    }

    async componentDidMount() {
        await callFakeAPI(3000)
        this.setState(() => ({
            isLoading: false
        }))
    }

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    handleNav = () => {
        this.setState({ isNavOpen: !this.state.isNavOpen });
        console.log(this.state.isNavOpen)
    }
    render() {
        return (
            <div className="curriculum-container">
                <Header/>
                <div className="main-content">
                    <div className="container">
                        <aside className={this.state.isNavOpen ? "side-nav-open" : ""}>
                            <SideNav/>
                        </aside>
                        <div className={this.state.isNavOpen ? "main-open curriculum-showcase" : "curriculum-showcase"}>
                            <div className="div">
                                <div className="burger" onClick={this.handleNav}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <NProgress isAnimating={this.state.isLoading}>
                                    {({ isFinished, progress, animationDuration }) => (
                                        <Container
                                        isFinished={isFinished}
                                        animationDuration={animationDuration}
                                        >
                                        <Spinner />
                                        </Container>
                                    )}
                                    </NProgress>
                                {this.state.isLoading ? '' :
                                    <Main/>
                                }
                            </div>
                            <footer>
                                <div className="container">
                                    <hr />
                                    <Link to="/">Help and FAQ</Link> | &nbsp;
                                    <Link to="/">Report An Issue</Link>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
