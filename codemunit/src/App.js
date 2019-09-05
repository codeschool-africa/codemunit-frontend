import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Home from './landing-page/pages/Home'
import Error from './components/Error'

function App() {
  return (
    <>
     <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;