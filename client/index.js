import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Core from './pages/core/core';

import { SORT, ACTIONS } from './constants/app-constants';
import './index.scss';

import { createStore } from 'redux';

const initialState = {
    results: {data:[]},
    fullItem: {
        isActive: false,
        filmId: -1
    },
    inputValue: "",
    sort: "rating",
    search: 'title',
    count: 0
}
function sort(state, sort, action) {
    fetch(`http://react-cdp-api.herokuapp.com/movies?sortBy=${SORT[sort]}&search=${state.inputValue}&searchBy=${state.search}`)
        .then(response => response.json())
        .then(json => reducer(state, { type: ACTIONS.SEARCH, results: json }));
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.RETURN_TO_MAIN_PAGE: {
                state = { 
                    ...state,
                    fullItem: {
                        isActive: false,
                        filmId: -1
                    }
                }
                break;
        }
        case ACTIONS.UPDATE_INPUT_VALUE: {
            state = { 
                ...state,
                inputValue: action.value
            }
            break;
        }
        case ACTIONS.RESET_INPUT_VALUE: {
            state = { 
                ...state,
                inputValue: ""
            }
            break;
        }
        case ACTIONS.SEARCH: {
            state = {
                ...state,
                results: action.results,
                count: action.results.data.length || 0
            }
            break;
        }
        case ACTIONS.SWITCH_SEARCH: {
            state = {
                ...state,
                search: action.search
            }
            break;
        }
        case ACTIONS.SWITCH_SORT: {
            state = { 
                ...state,
                sort: action.sort
            }
            sort(state, action.sort);
            break;
        }
        case ACTIONS.FULL_FILM_LOAD: {
            state = {
                ...state,
                fullItem: {
                    isActive: true,
                    filmData: action.filmData
                }
            }
            break;
        }
    }
    return state;
}

const store = createStore(reducer, initialState);

ReactDOM.render(<Provider store={store}><Core/></Provider>, document.getElementById("root"));

