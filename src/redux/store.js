import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import React from "react";
import {createLogger} from 'redux-logger';
import reducers, {initState} from './reducer/index.js';

let enhancer = applyMiddleware(thunk)
if (process.env.NODE_ENV === 'development') {
    console.log('************************', process.env.NODE_ENV);
    enhancer = applyMiddleware(thunk, createLogger());
}
const store = createStore(reducers, initState, enhancer);

export default store;
