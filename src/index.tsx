import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore } from "redux";

import store from './redux/store';

import './index.less';
import App from './app';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import RouteMap from './routes/routeMap';
import { NoLayoutRoutes } from './routes/index';

// 1、创建 store
// const store = createStore(counter);

ReactDOM.render(
  // 2、然后使用react-redux的Provider将props与容器连通起来
  <Provider store={store}>
    <BrowserRouter basename="/">
      <Switch>
        {RouteMap(NoLayoutRoutes)}
        <Route component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
