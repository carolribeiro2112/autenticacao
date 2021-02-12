import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Products from '../pages/Products';

const Routes = () => {
  return(
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/products" exact component={Products}/>
    </Switch>
  )
}

export default Routes;