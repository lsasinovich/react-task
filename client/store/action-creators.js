import { ACTIONS, SORT, SEARCH } from '../constants/app-constants';
import { call, put, all, takeLatest } from 'redux-saga/effects';


export const setEmptyResults = () => {
    return {
        type: ACTIONS.SET_EMPTY_RESULTS
    }
}

export const setSearchURL = (searchURL) => {
    return {
        type: ACTIONS.SET_SEARCH_URL,
        searchURL: searchURL
    }
}

export const switchSort = (sort, results) => {
    return {
        type: ACTIONS.SWITCH_SORT,
        sort: sort,
        results: results
    }
}

export const getMoviesByGenresAction = (results) => {
    return {
        type: ACTIONS.GET_MOVIES_BY_GENRES,
        results: results
    }
}

export const fullFilmLoad = (json) => {
    return {
        type: ACTIONS.FULL_FILM_LOAD,
        filmData: json,
    };
}

export const returnToMainPage = () => {
    return {
        type: ACTIONS.RETURN_TO_MAIN_PAGE
    };
}

export const updateInputValue = (value) => {
    return {
        type: ACTIONS.UPDATE_INPUT_VALUE,
        value: value
    };
}

export const resetInputValue = () => {
    return {
        type: ACTIONS.RESET_INPUT_VALUE
    };
}

export const searchHandler = (results, sortBy, searchBy, input) => {
    return {
        type: ACTIONS.SEARCH,
        results: results,
        sortBy: sortBy,
        searchBy: searchBy,
        input: input
    };
}

export const switchSearch = (search) => {
    return {
        type: ACTIONS.SWITCH_SEARCH,
        search: search
    };
}

export const fetchMovies = (sort, search, inputValue) => {
    console.log('here');
    return {
        type: ACTIONS.FETCH_MOVIES,
        payload: {
            sort: sort, 
            search: search, 
            inputValue: inputValue
        }
    }
}

export const fetchMoviesByGenres = (genre) => {
    return {
        type: ACTIONS.FETCH_MOVIES_BY_GENRES,
        payload: {
            genre: genre
        }
    }
}

export const fetchMoviesById = (id) => {
    return {
        type: ACTIONS.FETCH_MOVIES_BY_ID,
        payload: {
            id: id
        }
    }
}

export const switchSortAsyncAction = (sort, stateSort, inputValue, search) => {
    return {
        type: ACTIONS.SWITCH_SORT_ASYNC_ACTION,
        payload: {
            sort: sort, 
            stateSort: stateSort, 
            inputValue: inputValue, 
            search: search
        }
    }
}

export function* getMovie(action) {
    const { sort, search, inputValue } = action.payload;
    const value = inputValue || '';
    const response = yield call(fetch, `http://react-cdp-api.herokuapp.com/movies?sortBy=${SORT[sort]}&sortOrder=desc&search=${value}&searchBy=${SEARCH[search]}&limit=12`);
    const results = yield response.json();
  
    yield put(searchHandler(results, sort, search, value));
}

export function* watchFetchMovies() {
    yield takeLatest(ACTIONS.FETCH_MOVIES, getMovie);
}

export function* getMoviesByGenres(action) {
    const genres = action.payload.genre;

    const response = yield call(fetch, `http://react-cdp-api.herokuapp.com/movies?search=${genres}&searchBy=genres&limit=12`);
    const results = yield response.json();
  
    yield put(getMoviesByGenresAction(results));
}

export function* watchFetchMoviesByGenres() {
    yield takeLatest(ACTIONS.FETCH_MOVIES_BY_GENRES, fetchMoviesByGenres);
}

export function* fullLoad(action) {
    const id = action.payload.id;

    const response = yield call(fetch, `http://react-cdp-api.herokuapp.com/movies/${id}`);
    const results = yield response.json();
    if(results.id) {
        yield put(fullFilmLoad(results));
        yield put(fetchMoviesByGenres(results.genres[0]));
    } else {
        window.location.pathname = '/not_found';
    }
}

export function* watchFetchMoviesById() {
    yield takeLatest(ACTIONS.FETCH_MOVIES_BY_ID, fullLoad);
}

export function* switchSortAction(action) {
    const { sort, stateSort, inputValue, search } = action.payload;

    const response = yield call(fetch, `http://react-cdp-api.herokuapp.com/movies?sortBy=${SORT[sort]}&sortOrder=desc&search=${inputValue}&searchBy=${SEARCH[search]}&limit=12`);
    const results = yield response.json();
  
    yield put(switchSort(sort, results));
}

export function* watchSwitchSort() {
    yield takeLatest(ACTIONS.SWITCH_SORT_ASYNC_ACTION, switchSortAction);
}