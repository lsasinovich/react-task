import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import { ACTIONS, INITIAL_STATE } from '../constants/app-constants';
import rootSaga from './rootSaga';

export function reducer(state = INITIAL_STATE, action) {
  let newState;

  switch (action.type) {
    case ACTIONS.SET_EMPTY_RESULTS: {
      newState = {
        ...state,
        results: {
          data: [],
        },
        fullItem: {
          isActive: false,
        },
        resultsCount: 0,
        inputValue: '',

      };
      break;
    }

    case ACTIONS.RETURN_TO_MAIN_PAGE: {
      newState = {
        ...state,
        fullItem: {
          isActive: false,
        },
      };
      break;
    }
    case ACTIONS.UPDATE_INPUT_VALUE: {
      newState = {
        ...state,
        inputValue: action.value,
      };
      break;
    }
    case ACTIONS.RESET_INPUT_VALUE: {
      newState = {
        ...state,
        inputValue: '',
      };
      break;
    }
    case ACTIONS.SEARCH: {
      newState = {
        ...state,
        inputValue: action.input,
        search: action.searchBy,
        sort: action.sortBy,
        results: action.results,
        resultsCount: action.results.total,
        searchInfo: {
          search: state.search,
          value: state.inputValue,
        },
      };
      break;
    }
    case ACTIONS.SWITCH_SEARCH: {
      newState = {
        ...state,
        search: action.search,
      };
      break;
    }
    case ACTIONS.SWITCH_SORT: {
      newState = {
        ...state,
        sort: action.sort,
        results: action.results,
      };
      break;
    }
    case ACTIONS.GET_MOVIES_BY_GENRES: {
      newState = {
        ...state,
        results: action.results,
        resultsCount: action.results.total,
      };
      break;
    }
    case ACTIONS.FULL_FILM_LOAD: {
      newState = {
        ...state,
        fullItem: {
          isActive: true,
          filmData: action.filmData,
        },
      };
      break;
    }
    case ACTIONS.SET_SEARCH_URL: {
      newState = {
        ...state,
        searchURL: action.searchURL,
      };
      break;
    }
    default: {
      newState = {
        ...state,
      };
      break;
    }
  }

  return newState;
}

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState) {
  const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);
  store.runSaga = () => sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);

  return store;
}
