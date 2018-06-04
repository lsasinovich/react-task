import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistor, store, reducer } from './store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore, autoRehydrate } from 'redux-persist';
import { BrowserRouter } from 'react-router-dom'; 
import Core from './pages/core/core';

import './index.scss';

ReactDOM.hydrate(<Core Router={BrowserRouter}/>, 
document.getElementById("root"));

