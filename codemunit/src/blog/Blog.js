import React, { Component } from 'react'
import Header from "./components/Header"
import { FaFacebookF, FaTwitter, FaInstagram, FaArrowLeft, FaArrowRight } from "react-icons/all"
import "../styles/blog/style.css"
import Newssummary from './components/Newssummary';

export default class Blog extends Component {

    componentDidMount() {
        document.title = "Blog - Codemunit";
      }

    render() {
        return (
            <div className="blog">
                <Header hero="blog-bg">
                </Header>
                <div className="content" id="content">
                        <h1>Latest Posts</h1>
                        <div className="container carrier-posts">
                            <p>Carrier Posts</p>
                            <div className="news-showcase">
                                <Newssummary/>
                                <Newssummary />
                                <Newssummary />
                            </div>
                            <div className="arrows">
                                <div className="arrow arrow-left"><FaArrowLeft className="icon"/></div>
                                <div></div>
                                <div className="arrow arrow-right"><FaArrowRight className="icon"/></div>
                            </div>
                        </div>
                        <div className="container technology-posts">
                             <p>Technology Posts</p>
                            <div className="news-showcase">
                                <Newssummary/>
                                <Newssummary />
                                <Newssummary />
                            </div>
                            <div className="arrows">
                                <div className="arrow arrow-left"><FaArrowLeft className="icon"/></div>
                                <div></div>
                                <div className="arrow arrow-right"><FaArrowRight className="icon"/></div>
                            </div>
                        </div>
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
