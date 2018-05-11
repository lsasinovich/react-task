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
        isActive: false
    },
    inputValue: "",
    sort: "rating",
    search: 'title',
    count: 0,
    pagination: {
        activePage: 1
    }
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
                count: action.results.total
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
                sort: action.sort,
            }
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
        case ACTIONS.PAGINATION_HANDLER: {
            state = {
                ...state,
                pagination: {
                    activePage: action.activePage
                },
                results: action.results
            }
            break;
        }
    }
    return state;
}

const store = createStore(reducer, initialState);

ReactDOM.render(<Provider store={store}><Core/></Provider>, document.getElementById("root"));

