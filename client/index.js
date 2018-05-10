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
    fullItem: false,
    inputValue: "",
    sort: "rating",
    search: 'title'
}

const reducer = (state, action) => {
    switch (action.type) {
        case "RETURN_TO_MAIN_PAGE": {
                state = { 
                    ...state,
                    fullItem: false
                }
                break;
        }
        case "UPDATE_INPUT_VALUE": {
            state = { 
                ...state,
                inputValue: action.value
            }
            break;
        }
        case "RESET_INPUT_VALUE": {
            state = { 
                ...state,
                inputValue: ""
            }
            break;
        }
        case "SEARCH_HENDLER": {
            break;
        }
        case "SEARCH_TYPE_HENDLER": {
            state = {
                ...state,
                search: action.search
            }
            break;
        }
        case "SWITCH_SORT": {
            state = { 
                ...state,
                sort: action.sort
            }
            break;
        }
    }
    console.log(state);
    return state;
}

const store = createStore(reducer, initialState);

ReactDOM.render(<Provider store={store}><Core/></Provider>, document.getElementById("root"));

