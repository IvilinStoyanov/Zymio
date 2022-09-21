import 'materialize-css/dist/css/materialize.min.css';
import './theme/style.scss';
import './theme/helper.scss';



import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import App from './components/App';
import reducer from './reducers';

const store =
    configureStore({
        reducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware(),
    });

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <Provider store={store}><App /></Provider>
);