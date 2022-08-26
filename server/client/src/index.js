import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import App from './components/App';
import reducers from './reducers';

const reducer = combineReducers({ reducers });

const store = configureStore({ reducer }, applyMiddleware());

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <React.StrictMode>
        <Provider store={store}><App /></Provider>
    </React.StrictMode>
);