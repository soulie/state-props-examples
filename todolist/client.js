import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {createReducer,Provider,Enhancer} from 'redux-state-props';

import App from './components/App';

var reducer = createReducer();
var store = createStore(reducer,Enhancer(reducer));

ReactDOM.render (
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root'));
