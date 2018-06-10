import 'babel-polyfill';

import React from 'react';
// @flow
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Core from './pages/core/core';

import './index.scss';

import { configureStore } from './store/store';

const store = configureStore(window.PRELOADED_STATE);

ReactDOM.hydrate(
    <Core
        Router={BrowserRouter}
        store={store} />,
    document.getElementById('root'),
);

