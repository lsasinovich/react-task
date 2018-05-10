import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Core from './pages/core/core';

import './index.scss';

import { createStore } from 'redux';

const resultAssets = [
    { title: 'Asset 1' },
    { title: 'Asset 2' },
    { title: 'Asset 3' },
    { title: 'Asset 4' },
    { title: 'Asset 5' },
    { title: 'Asset 6' },
    { title: 'Asset 7' },
    { title: 'Asset 8' },
    { title: 'Asset 9' },
];

const initialState = {
    results: resultAssets,
    fullItem: true
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD": {
            state = {
                results: state.results,
                fullItem: !state.fullItem
            }
        }
    }
    return state;
}

const store = createStore(reducer, initialState);

ReactDOM.render(<Provider store={store}><Core/></Provider>, document.getElementById("root"));

