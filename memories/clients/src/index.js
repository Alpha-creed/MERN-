import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'

import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers'
import './index.css'

// const store=createStore(reducers, compose(applyMiddleware(thunk)))
const store = configureStore({reducer:reducers})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  // </React.StrictMode>
);

