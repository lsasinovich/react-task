import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistor, store, reducer } from './store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore, autoRehydrate } from 'redux-persist';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import { Switch } from 'react-router'; 
import Core from './pages/core/core';

import './index.scss';

ReactDOM.render(
        <PersistGate persistor={persistor}>
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Core/>
                    </Switch>
                </Router>
            </Provider>
        </PersistGate>, 
document.getElementById("root"));

