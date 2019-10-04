import React from 'react';
import { Route, Switch } from 'react-router-dom'
// import 'animate.css/animate.min.css'
// import ScrollAnimation from 'react-animate-on-scroll'

import Home from './landing-page/pages/Home'
import About from './landing-page/pages/About'
import User from "./Users/User"
import Blog from "./blog/Blog"
import Curriculum from './landing-page/pages/Curriculum'
import Error from './components/Error'

import Dashboard from "./dashboard/Dashboard"

const App = () => {

  return (
    <>
        <Switch >
            <Route exact path="/" component={Home} key="home"/>
            <Route exact path="/about" component={About} key="about"/>
            <Route exact path="/user" component={User} key="user"/>
            <Route exact path="/blog" component={Blog} key="blog"/>
            <Route exact path="/curriculum" component={Curriculum} key="curriculum"/>
            <Route exact path="/en/dashboard" component={Dashboard} key="dashboard"/>
            <Route component={Error} />
          </Switch>
    </>
  );

}

export default App;