import React from 'react';
import { Route, Switch } from 'react-router-dom'
// import 'animate.css/animate.min.css'
// import ScrollAnimation from 'react-animate-on-scroll'

import Home from './landing-page/pages/Home'
import About from './landing-page/pages/About'
import Error from './components/Error'

const App = () => {

  return (
    <>
        <Switch >
            <Route exact path="/" component={Home} key="home"/>
            <Route exact path="/about" component={About} key="about"/>
            <Route component={Error} />
          </Switch>
    </>
  );
  
}

export default App;