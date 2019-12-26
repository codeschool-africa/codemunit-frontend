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

const [isNavOpen, setIsNavOpen] = useState(false);

const [isWeb,  setWeb ] =useState(false);

// const [isActive, setActive] = useState(false);

const [isProgramming, setProgramming] = useState(false);

const [isWebStarter, setWebStarter ] = useState(false);

const [isFrontend, setFrontend] = useState(false);

const [isCssFramework, setCssFramework] = useState(false);

const [isFrontendFramework, setFrontendFramework ] = useState(false);

const [isBackend, setBackend] = useState(false);


const showWeb = () => {
    setWeb(!isWeb);
}

const showProg = () => {
    setProgramming(!isProgramming);
}

const showWebStarter = () => {
    setWebStarter(!isWebStarter);
}

const showFrontend = () => {
    setFrontend(!isFrontend);
}

const showCssFramework = () => {
    setCssFramework(!isCssFramework);
}

const showFrontendFramework = () => {
    setFrontendFramework(!isFrontendFramework);
}

const showBackend = () => {
    setBackend(!isBackend);
}

const handleNav = () => {
    setIsNavOpen(!isNavOpen);
}
 

let { path, url } = useRouteMatch();
    return (
        <div className="curriculum-container">
            <Header/>
            <div className="main-content">
                <div className="container">
                    <aside 
                        className={isNavOpen ? "side-nav-open" : ""}
                    >
                        <div>
            <ul className="main-ul">
                <li onClick={showWeb} className={isWeb?"active":""}>
                    <FaAngleRight className="icon"/> Full stack web development
                </li>
                <div className={isWeb
                        ? "dropdown dropdown-active sub-section-1"
                        : "dropdown sub-section-1"}>
                    <ul>
                        <li onClick={showProg} className={isProgramming ? "active" : ""}>
                            <FaAngleRight className="icon"/> Programming
                        </li>
                        <div className={isProgramming
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
                        <li onClick={showWebStarter} className={isWebStarter? "active": ""}>
                            <FaAngleRight className="icon"/> Getting started with the Web
                        </li>
                        <div className={isWebStarter
                                ? "dropdown dropdown-active sub-section-2"
                                : "dropdown sub-section-2"}>
                            <ul>
                                <li className="anchor">
                                    <Link>What is the internet?</Link>
                                </li>
                                <li className="anchor">
                                    <Link>What is a web?</Link>
                                </li>
                            </ul>
                        </div>
                        <li onClick={showFrontend} className={isFrontend?"active": ""}>
                            <FaAngleRight className="icon"/> Front-end web development
                        </li>
                        <div className={isFrontend
                                ? "dropdown dropdown-active sub-section-2"
                                : "dropdown sub-section-2"}>
                            <ul>
                                <li className="anchor">
                                    <Link to={`${url}/web-development/html`}>Html</Link>
                                </li>
                                <li className="anchor">
                                    <Link to={`${url}/web-development/css`}>Css</Link>
                                </li>
                                <li onClick={showCssFramework} className={isCssFramework?"active":""}>
                                    <FaAngleRight className="icon"/> Css frameworks and responsive design
                                </li>
                                <div className={isCssFramework
                                        ? "dropdown dropdown-active sub-section-3"
                                        : "dropdown sub-section-3"}>
                                    <ul>
                                        <li className="anchor">
                                            <Link to={`${url}/web-development/responsive-web-design-with-media-queries`}>Responsive web design with media queries</Link>
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
                                <li onClick={showFrontendFramework} className={isFrontendFramework?"active": ""}>
                                    <FaAngleRight className="icon"/> Front-end Frameworks
                                </li>
                                <div className={isFrontendFramework
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
                        <li onClick={showBackend} className={isBackend?"active":""}>
                            <FaAngleRight className="icon" /> Back-end web development
                        </li>
                        <div className={isBackend
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
                    </aside>
                    <div 
                    className={isNavOpen ? "main-open curriculum-showcase" : "curriculum-showcase"}
                    >
                        <div className="div">
                            <div className="burger" 
                            onClick={handleNav}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
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
                                        <Main/>
                                    </Route>
                                    <Route exact path={`${path}/web-development/html`}>
                                        <Html/>
                                    </Route>
                                    <Route exact path={`${path}/web-development/css`}>
                                        <Css/>
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