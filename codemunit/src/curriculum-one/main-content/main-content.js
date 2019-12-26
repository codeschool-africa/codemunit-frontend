import React, { useState } from 'react'
// import bgImg from "../../images/blog-bg.jpg";
// import { Switch, Route, Router, Link, useParams, useRouteMatch } from "react-router-dom"
// import Html from "../pages/html"
// import AuthRoute from "../../util/AuthRoute"

const Main = () => {
    // let {url, path} = useRouteMatch();
        return (
            <div className="main">
                <div className="bg-container">
                    <div className="bg-color">
                        <div className="title-container">
                            <h2>Learn today, its fun </h2>
                            <h3>Follow our curriculum, learn to create awesome stuffs</h3>
                        </div>
                    </div>
                </div>
                <div className="main-container">
                    <section className="section-one">
                        <h1>Our curriculum</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore corrupti, quo molestias quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam ratione cum alias?</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore corrupti, quo molestias quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam ratione cum alias?</p>
                    </section>
                    <section className="section-one">
                        <h1>What will you learn?</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore corrupti, quo molestias quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam ratione cum alias?</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore corrupti, quo molestias quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam ratione cum alias?</p>
                    </section>
                </div>
            </div>
        )
}

export default Main
