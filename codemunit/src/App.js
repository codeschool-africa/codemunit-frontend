import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { NProgress } from '@tanem/react-nprogress'
import axios from "axios"
import jwtDecode from "jwt-decode"

//components
import Bar from './components/loader/bar'
import Spinner from "./components/loader/spinner"
import Container from "./components/loader/container"

//pages

//landing page

import Home from './landing-page/pages/Home'
import About from './landing-page/pages/About'
import Mentorship from "./landing-page/pages/Mentorship"
import Faq from "./landing-page/pages/Faq"
import Contact from "./landing-page/pages/Contact"
import User from "./Users/User"
import Blog from "./blog/Blog"
import Post from "./blog/Post"

//curriculum pages
import Curriculum from './curriculum/'
import Html from "./curriculum/pages/html"
import Error from './components/Error'

import Dashboard from "./dashboard/Home"
import Profile from "./dashboard/pages/User-profile"

import AuthRoute from "./util/AuthRoute"

const callFakeAPI = delay =>
  new Promise(resolve => {
    setTimeout(resolve, delay)
  })

class App extends Component {

  state = {
    isLoading: true
  }

  async componentDidMount() {
    await callFakeAPI(3000)
    this.setState(() => ({
      isLoading: false
    }))
    // axios.get('http://kodemunit-api.herokuapp.com/')
    // .then(res => console.log(res))

  }

  render() {
    return (
      <>
        {/* <NProgress isAnimating={this.state.isLoading}>
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
        {this.state.isLoading ? '' : */}
          <Switch >
            <Route exact path="/" component={Home} key="home"/>
            <Route exact path="/about" component={About} key="about"/>
            <Route exact path="/account" component={User} key="user"/>
            <Route exact path="/blog" component={Blog} key="blog"/>
            <Route exact path="/blog/post" component={Post} key="post"/>

                {/* curriculum routes */}
            <AuthRoute exact path="/curriculum" component={Curriculum} key="curriculum"/>
            <AuthRoute exact path="/curriculum/web-development/html" component={Html} key="html"/>

            <Route exact path="/mentorship" component={Mentorship} key="mentorship" />
            <Route exact path="/faq" component={Faq} key="faq" />
            <Route exact path="/contact-us" component={Contact} key="contact-us" />
            <AuthRoute exact path="/en/dashboard" component={Dashboard} key="dashboard"/>
            <Route exact path="/profile:username" component={Profile} key="profile"/>
            <Route component={Error} />
          </Switch>
        {/* } */}
      </>
    );
  }
}

export default App;