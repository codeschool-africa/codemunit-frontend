import React, { useState, useEffect } from "react";
import axios from "axios";
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
import Login from "./Users/Login";
import Signup from "./Users/Signup";
import Blog from "./blog/Blog";
import Post from "./blog/Post";
import Error from "./components/Error";

//curriculum pages
import Curriculum from "./curriculum/curriculum";

//admin-panel
import AdminPanel from "./Auth/";

//dashboard
import Dashboard from "./dashboard/";

//protected routes
import AuthRoute from "./util/AuthRoute";
import AdminRoute from "./util/adminRoute";

//load user data
import { loadUserData } from "./redux/actions/auth";
import setAuthToken from "./util/setAuthToken";

axios.defaults.baseURL = "https://kodemunit.herokuapp.com";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({ auth: { isAuthenticated, user, loading } }) => {
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
          <Route exact path='/signin' component={Login} key='login' />
          <Route exact path='/register' component={Signup} key='signup' />
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
          <AuthRoute path='/dashboard' component={Dashboard} key='dashboard' />
          <AdminRoute
            path='/admin-panel'
            component={AdminPanel}
            key='dashboard'
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
