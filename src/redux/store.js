import {configureStore } from '@reduxjs/toolkit';
//import { createRouterMiddleware } from '@lagunovsky/redux-react-router'
import thunk from 'redux-thunk'
import rootReducer from './reducers';

const middlewareList = [thunk];

const store = configureStore({
    reducer:rootReducer,
    //devTools: composeWithDevTools,
    middleware: [...middlewareList],
});

export default store