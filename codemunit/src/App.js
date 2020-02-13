import React, { useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//react-redux
import store from "./redux/store";

//protected routes
// import AuthRoute from "./util/AuthRoute";

//styles
import "./styles/styles.css";

//load user data
import { loadUserData } from "./redux/actions/auth";
import setAuthToken from "./util/setAuthToken";

//pages
import Home from "./landing-pages/pages/";
import About from "./landing-pages/pages/about";
import Contact from "./landing-pages/pages/contact";
import Hire from "./landing-pages/pages/hire";
import Mentorship from "./landing-pages/pages/mentorship";

import Blog from "./blog/pages/";
import Curriculum from "./learn/pages/";

import Faq from "./pages/faq";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";

//history
import { createBrowserHistory } from "history";

//setting axios
axios.defaults.baseURL = "https://kodemunit.herokuapp.com";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const hist = createBrowserHistory();

const App = ({ auth: { isAuthenticated, user, loading } }) => {
  useEffect(() => {
    store.dispatch(loadUserData());
  }, []);
  return (
    <Router history={hist}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about-us' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/hire' component={Hire} />
        <Route exact path='/mentorship' component={Mentorship} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/learn' component={Curriculum} />
        <Route exact path='/faq' component={Faq} />
        <Route exact path='/terms-and-conditions' component={Terms} />
        <Route exact path='/privacy-policy' component={Privacy} />
      </Switch>
    </Router>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

App.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {})(App);
