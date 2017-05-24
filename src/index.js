import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import createHistory from "history/createBrowserHistory";
import {routerMiddleware} from "react-router-redux";

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
    <App />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
