import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { reducer } from './store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore, autoRehydrate } from 'redux-persist';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import { Switch } from 'react-router'; 
import createBrowserHistory from 'history/createBrowserHistory';
import Core from './pages/core/core';

import './index.scss';

const history = createBrowserHistory();

ReactDOM.render(
        <PersistGate persistor={persistor}>
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/not_found" render={() => <p>NOT FOUND</p>}/>
                        <Route path="/" component={Core}/>
                    </Switch>
                </Router>
            </Provider>
        </PersistGate>, 
document.getElementById("root"));

