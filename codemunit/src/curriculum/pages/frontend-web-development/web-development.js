import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { FaAngleRight } from "react-icons/all";

import { NProgress } from "@tanem/react-nprogress";

//components
import Spinner from "../../../components/content-loader/spinner";
import Container from "../../../components/content-loader/container";

//components
// import Main from "../../main-content/main-content"

import "../../../styles/curriculum/style.css";

const callFakeAPI = delay =>
  new Promise(resolve => {
    setTimeout(resolve, delay);
  });

const FrontEndWebDevelopment = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await callFakeAPI(3000);
      setLoading(false);
    })();
  }, []);

  const [isNavOpen, setIsNavOpen] = useState(true);

  const [isWebStarter, setWebStarter] = useState(true);

  const [isFrontend, setFrontend] = useState(true);

  const [isCssFramework, setCssFramework] = useState(false);

  const [isFrontendFramework, setFrontendFramework] = useState(false);

  const showWebStarter = () => {
    setWebStarter(!isWebStarter);
  };

  const showFrontend = () => {
    setFrontend(!isFrontend);
  };

  const showCssFramework = () => {
    setCssFramework(!isCssFramework);
  };

  const showFrontendFramework = () => {
    setFrontendFramework(!isFrontendFramework);
  };

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  let { path, url } = useRouteMatch();
  return (
    <div className='curriculum-container'>
      <div className='main-content'>
        <div className='container'>
          <aside className={isNavOpen ? "side-nav-open" : ""}>
            <div>
              <ul className='main-ul'>
                <div className='dropdown dropdown-active sub-section-1'>
                  <ul>
                    <li
                      onClick={showWebStarter}
                      className={isWebStarter ? "active" : ""}
                    >
                      <FaAngleRight className='icon' /> Getting started with the
                      Web
                    </li>
                    <div
                      className={
                        isWebStarter
                          ? "dropdown dropdown-active sub-section-2"
                          : "dropdown sub-section-2"
                      }
                    >
                      <ul>
                        <li className='anchor'>
                          <Link to={`${url}/what-is-internet`}>
                            What is the internet?
                          </Link>
                        </li>
                        <li className='anchor'>
                          <Link to={`${url}/introduction-to-web`}>
                            What is a web?
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <li
                      onClick={showFrontend}
                      className={isFrontend ? "active" : ""}
                    >
                      <FaAngleRight className='icon' /> Front-end web
                      development
                    </li>
                    <div
                      className={
                        isFrontend
                          ? "dropdown dropdown-active sub-section-2"
                          : "dropdown sub-section-2"
                      }
                    >
                      <ul>
                        <li className='anchor'>
                          <Link to={`${url}/html`}>Html</Link>
                        </li>
                        <li className='anchor'>
                          <Link to={`${url}/css`}>Css</Link>
                        </li>
                        <li
                          onClick={showCssFramework}
                          className={isCssFramework ? "active" : ""}
                        >
                          <FaAngleRight className='icon' /> Css frameworks and
                          responsive design
                        </li>
                        <div
                          className={
                            isCssFramework
                              ? "dropdown dropdown-active sub-section-3"
                              : "dropdown sub-section-3"
                          }
                        >
                          <ul>
                            <li className='anchor'>
                              <Link
                                to={`${url}/responsive-web-design-with-media-queries`}
                              >
                                Responsive web design with media queries
                              </Link>
                            </li>
                            <li className='anchor'>
                              <Link to={`${url}/bootstrap`}>Bootstrap</Link>
                            </li>
                            <li className='anchor'>
                              <Link to={`${url}/sass`}>Sass</Link>
                            </li>
                          </ul>
                        </div>
                        <li className='anchor'>
                          <Link to={`${url}/javascript`}>Javascript</Link>
                        </li>
                        <li className='anchor'>
                          <Link to={`${url}/advanced-html5`}>
                            Advanced HTML5
                          </Link>
                        </li>
                        <li
                          onClick={showFrontendFramework}
                          className={isFrontendFramework ? "active" : ""}
                        >
                          <FaAngleRight className='icon' /> Front-end Frameworks
                        </li>
                        <div
                          className={
                            isFrontendFramework
                              ? "dropdown dropdown-active sub-section-3"
                              : "dropdown sub-section-3"
                          }
                        >
                          <ul>
                            <li className='anchor'>
                              <Link to={`${url}/react-js`}>ReactJs</Link>
                            </li>
                            <li className='anchor'>
                              <Link to={`${url}/angular`}>AngularJs</Link>
                            </li>
                            <li className='anchor'>
                              <Link to={`${url}/jquery`}>jQuery</Link>
                            </li>
                          </ul>
                        </div>
                      </ul>
                    </div>
                  </ul>
                </div>
              </ul>
            </div>
          </aside>
          <div
            className={
              isNavOpen
                ? "main-open curriculum-showcase"
                : "curriculum-showcase"
            }
          >
            <div className='div'>
              <div className='burger' onClick={handleNav}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              {/* <NProgress isAnimating={isLoading}>
                                {({ isFinished, progress, animationDuration }) => (
                                    <Container
                                    isFinished={isFinished}
                                    animationDuration={animationDuration}
                                    >
                                    <Spinner />
                                    </Container>
                                )}
                            </NProgress> */}
              {/* {isLoading ? '' : */}
              <Switch>
                <Route exact path={path}>
                  <div className='main-page-content'>
                    <div className='header'>
                      <div className='container'>
                        <h1>Frontend Web Developement - Course overview</h1>
                        <div className='content-info'>
                          <span>
                            {/* Course duration: <span>12hrs</span> */}
                          </span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <div className='curriculum-content'>
                      <div className='container'>
                        <div className='left-container'>
                          <div className='info'>
                            <span></span>
                            This curriculum will guide you in your learning
                            process and become expert in web development
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eveniet neque dolore expedita repellendus,
                            iure consequuntur, veniam animi deleniti qui dolor
                            obcaecati nihil? Quia consequatur doloremque
                            dignissimos architecto? Eaque, nesciunt
                            consequuntur!
                          </p>
                        </div>
                        <div className='right-container'>
                          {/* hello world */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Route>
                <Route exact path={`${path}/html`}>
                  <Html />
                </Route>
                <Route exact path={`${path}/css`}>
                  <Css />
                </Route>
                <Route component={Error} />
              </Switch>
              {/* } */}
            </div>
            <footer>
              <div className='container'>
                <hr />
                <Link to='/'>Help and FAQ</Link> | &nbsp;
                <Link to='/'>Report An Issue</Link>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

const Html = () => {
  return (
    <div className='main-page-content'>
      <div className='header'>
        <div className='container'>
          <h1>HTML overview</h1>
          <div className='content-info'>
            <span>{/* Course duration: <span>12hrs</span> */}</span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};
const Css = () => {
  return (
    <div className='main-page-content'>
      <div className='header'>
        <div className='container'>
          <h1>What is CSS</h1>
          <div className='content-info'>
            <span>{/* Course duration: <span>12hrs</span> */}</span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Error = () => {
  return (
    <div className='main-page-content'>
      <div className='header'>
        <div className='container'>
          <h1 className='error'>
            Ooops!! page not found, check the url or navigate through the menu
            <br /> to go to your destination
          </h1>
          <div className='content-info'>
            <span>{/* Course duration: <span>12hrs</span> */}</span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEndWebDevelopment;
// will use this approach to make this page look good.... ben dont forget
