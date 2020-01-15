import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NProgress } from "@tanem/react-nprogress";

//react-redux
import store from "./redux/store";

//loading components
import Bar from "./components/loader/bar";
import Spinner from "./components/loader/spinner";
import Container from "./components/loader/container";

//pages
//landing page
import Home from "./landing-page/pages/Home";
import About from "./landing-page/pages/About";
import Mentorship from "./landing-page/pages/Mentorship";
import Faq from "./landing-page/pages/Faq";
import Contact from "./landing-page/pages/Contact";
import User from "./Users/User";
import Blog from "./blog/Blog";
import Post from "./blog/Post";
import Error from "./components/Error";

//curriculum pages
import Curriculum from "./curriculum/curriculum";

import Dashboard from "./dashboard/";
import DashboardAuth from "./components/dashboard";

//protected routes
import AuthRoute from "./util/AuthRoute";

//load user data
import { loadUserData } from "./redux/actions/auth";
import setAuthToken from "./util/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const callFakeAPI = delay =>
  new Promise(resolve => {
    setTimeout(resolve, delay);
  });

const App = ({ auth: { isAuthenticated, user } }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await callFakeAPI(3000);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    store.dispatch(loadUserData());
  }, []);
  return (
    <Router>
      <NProgress isAnimating={loading}>
        {({ isFinished, progress, animationDuration }) => (
          <Container
            isFinished={isFinished}
            animationDuration={animationDuration}
          >
            <Bar progress={progress} animationDuration={animationDuration} />
            <Spinner />
          </Container>
        )}
      </NProgress>
      {loading ? (
        ""
      ) : (
        <Switch>
          <Route exact path='/' component={Home} key='home' />
          <Route exact path='/about' component={About} key='about' />
          <Route exact path='/account' component={User} key='user' />
          <Route exact path='/blog' component={Blog} key='blog' />
          <Route exact path='/blog/post' component={Post} key='post' />
          <AuthRoute
            path='/curriculum'
            component={Curriculum}
            key='curriculum'
          />
          <Route
            exact
            path='/mentorship'
            component={Mentorship}
            key='mentorship'
          />
          <Route exact path='/faq' component={Faq} key='faq' />
          <Route
            exact
            path='/contact-us'
            component={Contact}
            key='contact-us'
          />
          <AuthRoute
            path='/dashboard/:_id'
            component={Dashboard}
            key='dashboard'
          />
          <AuthRoute
            path={`/dashboard/`}
            component={DashboardAuth}
            key='dashboardauth'
          />
          <Route component={Error} />
        </Switch>
      )}
    </Router>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

Home.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {})(App);
