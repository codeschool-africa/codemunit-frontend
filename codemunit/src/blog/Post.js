import React, { Component } from 'react'
import Header from "./components/Header"
import { FaFacebookF, FaTwitter, FaInstagram, FaAngleDown } from "react-icons/all"
import "../styles/blog/style.css"

export default class Blog extends Component {

    componentDidMount() {
        document.title = "Blog - Codemunit";
      }

    render() {
        return (
            <div className="blog">
                <Header hero="blog-bg">
                    <a href="#content" className="menu">
                        <FaAngleDown
                            style={{
                                color: "#1a2e3f",
                                fontSize: "25px",
                                marginTop: "7px"
                            }}
                        />
                    </a>
                </Header>
                <div className="content" id="content">
                    <h1>Sorry there is no posts available!!</h1>
                </div>
                <footer>
                    <div className="container">
                    <div className="social-container">
                            <a href="www.facbook.com"><FaFacebookF className="icon"/></a>
                            <a href="www.twitter.com"><FaTwitter className="icon"/></a>
                            <a href="www.instagram.com"><FaInstagram className="icon"/></a>
                        </div>
                        <div className="copyright">
                            Copyright &copy; 2019 Codemunit.
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
