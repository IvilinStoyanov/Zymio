import 'materialize-css/dist/css/materialize.min.css';
import './theme/style.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import App from './components/App';
import reducers from './reducers';

const store =
    configureStore({
        reducer: reducers,
        middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
    });

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <Provider store={store}><App /></Provider>
);