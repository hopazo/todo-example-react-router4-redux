import React from "react";
import {render} from "react-dom";
import createHistory from "history/createBrowserHistory";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {Switch, Route} from 'react-router-dom';
import {ConnectedRouter, routerMiddleware} from "react-router-redux";

import todoApp from "./reducers";
import App from "./components/App";

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
    todoApp,
    applyMiddleware(middleware)
);

render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
          <Switch>
              <Route exact path='/' component={App}/>
              <Route path='/:filter' component={App}/>
          </Switch>
      </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
