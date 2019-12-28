import React, { useState, useEffect } from 'react'
import { Switch, Route, Link, useRouteMatch } from "react-router-dom"
import { FaAngleDoubleLeft } from "react-icons/all"

//pages
import FrontendWebDevelopment from "./pages/frontend-web-development/web-development"

//components
import Header from "./components/Header"

//styles
import "../styles/curriculum/style.css"

//images
import CurriculumImage from "../images/curriculum-intro.jpg"

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
            <Switch>
                <Route exact path={path}>
                    <div className="main-content curriculum-page-only">
                        <div className="container">
                            <div className="main-page curriculum-showcase">
                                <div className="div">
                                    <div className="main">
                                        <div className="bg-container">
                                            <div className="bg-color">
                                                <div className="img-container">
                                                    <img src={CurriculumImage} alt=""/>
                                                </div>
                                                <div className="title-container">
                                                    <h2><span>Learn today, build your tomorrow</span><br/><span className="left">it is fun and it is worth</span></h2>
                                                    <p>
                                                        Programming is a critical skill in today’s economy, and there is a shortage of qualified developers. Whether you’re new to coding, adding more skills, or advancing your career, 10 hours a week will prepare you for your ideal developer job.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main-container">
                                            <h1>Start your journey with us by selecting the course you want to learn</h1>
                                            <div className="showcase">
                                                <section className="section-one">
                                                    <h1>Get started</h1>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore corrupti, quo molestias quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam ratione cum alias?</p>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore corrupti, quo molestias quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam ratione cum alias?</p>
                                                    <Link to={`${url}/get-started`} target="_blank" className="btn-primary">Learn More</Link>
                                                </section>
                                                <section className="section section-one">
                                                    <h1>Introduction to Programming</h1>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore corrupti, quo molestias quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam ratione cum alias?</p>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore corrupti, quo molestias quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam ratione cum alias?</p>
                                                    <Link to={`${url}/introduction-to-programming`} target="_blank" className="btn-primary">View Curriculum</Link>
                                                </section>
                                                <section className="section section-one">
                                                    <h1>Frontend Web Development</h1>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore corrupti, quo molestias quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam ratione cum alias?</p>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore corrupti, quo molestias quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam ratione cum alias?</p>
                                                    <Link to={`${url}/frontend-web-development`} target="_blank" className="btn-primary">View Curriculum</Link>
                                                </section>
                                                <section className="section section-one">
                                                    <h1>Backend Web Development</h1>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore corrupti, quo molestias quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam ratione cum alias?</p>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore corrupti, quo molestias quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam ratione cum alias?</p>
                                                    <Link to={`${url}/backend-web-development`} target="_blank" className="btn-primary">View Curriculum</Link>
                                                </section>
                                                <section className="section section-one">
                                                    <h1>UI/UX Design</h1>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore corrupti, quo molestias quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam ratione cum alias?</p>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore corrupti, quo molestias quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam ratione cum alias?</p>
                                                    <Link to={`${url}/ui-ux-design`} target="_blank" className="btn-primary">View Curriculum</Link>
                                                </section>
                                                <section className="section section-one">
                                                    <h1>Mobile App Development</h1>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore corrupti, quo molestias quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam ratione cum alias?</p>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore corrupti, quo molestias quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam ratione cum alias?</p>
                                                    <Link to={`${url}/mobile-app-development`} target="_blank" className="btn-primary">View Curriculum</Link>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
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
                </Route>
                <Route path={`${path}/frontend-web-development`}>
                    <div className="main-content">
                        <FrontendWebDevelopment/>
                    </div>
                </Route>
                <Route path={`${path}/backend-web-development`}>
                    <div>hello backend web developer</div>
                </Route>
                <Route component={Error}/>
            </Switch>
        </div>
    )
}

const Error = () => {
    return (
        <div className="main-content curriculum-page-only">
            <div className="container">
                <div className="main-page curriculum-showcase">
                    <div className="div">
                        <div className="main">
                            <div className="bg-container">
                                <div className="bg-color">
                                    <div className="img-container">
                                        <img src={CurriculumImage} alt=""/>
                                    </div>
                                    <div className="title-container">
                                        <h2><span className="error">Oooopss!! page not found</span></h2>
                                        <p>
                                            This page doesn't exist, recheck the url and try again or <Link to="/curriculum">Go back to Home</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
    )
}

export default Curriculum
// will use this approach to make this page look good.... ben dont forget