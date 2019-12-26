import React, { useState, useEffect } from 'react'
// import { Route, Switch } from 'react-router-dom'
import { Switch, Route, Link, useRouteMatch } from "react-router-dom"
import { FaAngleRight } from "react-icons/all"
// import AuthRoute from "../util/AuthRoute"
import Html from "./pages/html"
// import Error from "../components/Error"
// import Css from "./pages/css"

import { NProgress } from '@tanem/react-nprogress'

//components
import Spinner from "../components/content-loader/spinner"
import Container from "../components/content-loader/container"

//components

import Header from "./components/Header"
// import SideNav from "./main-content/sidenav"
import Main from "./main-content/main-content"

import "../styles/curriculum/style.css"

// import logo from "../images/black-logo.png"
// import profile from "../images/profile.png"
// import { Link } from 'react-router-dom'
// import { FaSearch, FaAngleDown } from "react-icons/all"


// export default SideNav


const callFakeAPI = delay =>
    new Promise(resolve => {
        setTimeout(resolve, delay)
    })

const Curriculum = () => {

const [isLoading, setLoading] = useState(true)

useEffect(() => {
    ;(async () => {
      await callFakeAPI(3000)
      setLoading(false)
    })()
  }, [])

let { path, url } = useRouteMatch();
    return (
        <div className="curriculum-container">
            <Header/>
            <div className="main-content">
                <div className="container">
                    <div className="main-page curriculum-showcase">
                        <div className="div">
                            <NProgress isAnimating={isLoading}>
                                {({ isFinished, progress, animationDuration }) => (
                                    <Container
                                    isFinished={isFinished}
                                    animationDuration={animationDuration}
                                    >
                                    <Spinner />
                                    </Container>
                                )}
                            </NProgress>
                            {isLoading ? '' :
                                <Switch>
                                    <Route exact path={path}>
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
                                                    <Link to={`${url}/frontend-web-development`} target="_blank">Dive in</Link>
                                                </section>
                                                <section className="section-one">
                                                    <h1>What will you learn?</h1>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore corrupti, quo molestias quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam ratione cum alias?</p>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore corrupti, quo molestias quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam ratione cum alias?</p>
                                                </section>
                                            </div>
                                        </div>
                                    </Route>
                                    <Route exact path={`${path}/frontend-web-development`}>
                                        <div>
                                            hello frontend web developer
                                        </div>
                                    </Route>
                                    <Route exact path={`${path}/backend-web-development`}>
                                        <div>hello backend web developer</div>
                                    </Route>
                                    <Route component={Error}/>
                                </Switch>
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

const Css = () => {
    // let { topicId } = useParams();
    // let {url, path} = useRouteMatch();
        return (
            <div className="main">
                css
            </div>
        )
}

const Error = () => {
    return (
        <div>
            oopss page is not available
        </div>
    )
}

export default Curriculum
// will use this approach to make this page look good.... ben dont forget