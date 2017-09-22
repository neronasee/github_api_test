import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';

import App from './App';
import UsersList from './containers/UsersList';
import UserProfile from './containers/UserProfile'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={UsersList} />
        <Route path="users/:id" component={UserProfile}/>
      </Route>
    </Router>
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();