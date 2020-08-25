import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './MyApp';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import userReducer from './reducers/userReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store= createStore(userReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
