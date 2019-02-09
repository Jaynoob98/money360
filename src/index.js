import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
//import './index.css';
import App from './App';
import Users from './views/users';
import higherPurchase from './views/higherPurchase';
import * as serviceWorker from './serviceWorker';
import NotFound from './views/NotFound';
//import HigherPurchase from './components/views/higherPurchase';

const routing = (
    <Router>
      <div>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/higherPurchase">Higher Purchase</Link>
        </li>
      </ul> */}
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/higherPurchase" component={higherPurchase} />
        <Route component={NotFound} />
      </Switch>
        
      </div>
    </Router>
  )

ReactDOM.render( routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();