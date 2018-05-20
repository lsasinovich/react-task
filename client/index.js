import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Core from './pages/core/core';
import { persistor, store } from './store';
import { reducer } from './store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore, autoRehydrate } from 'redux-persist';

import './index.scss';

ReactDOM.render(<PersistGate persistor={persistor}>
    <Provider store={store}>
        <Core/>
    </Provider>
</PersistGate>, document.getElementById("root"));

