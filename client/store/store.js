import { createStore, compose, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware, { END } from 'redux-saga';

import { SORT, ACTIONS, INITIAL_STATE } from '../constants/app-constants';
import { rootSaga } from './rootSaga';

export function reducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTIONS.SET_EMPTY_RESULTS: {
            state = { 
                ...state,
                results: {
                    data: []
                },
                fullItem: {
                    isActive: false
                },
                resultsCount: 0,
                inputValue: ""

            }
            break;
        }

        case ACTIONS.RETURN_TO_MAIN_PAGE: {
                state = { 
                    ...state,
                    fullItem: {
                        isActive: false
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
                inputValue: action.input,
                search: action.searchBy,
                sort: action.sortBy,
                results: action.results,
                resultsCount: action.results.total,
                searchInfo: {
                    search: state.search,
                    value: state.inputValue
                }
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
                results: action.results,
            }
            break;
        }
        case ACTIONS.GET_MOVIES_BY_GENRES: {
            state = { 
                ...state,
                results: action.results,
                resultsCount: action.results.total,
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
        case ACTIONS.SET_SEARCH_URL: {
            state = {
                ...state,
                searchURL: action.searchURL
            }
            break;
        }
    }
    return state;
}

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState) {
  const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);
  store.runSaga = () => sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);

  return store;
};