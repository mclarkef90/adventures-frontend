import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './MyApp';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'

import manageApp from './reducers/manageApp';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let store= createStore(manageApp, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
