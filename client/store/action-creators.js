import { call, put, takeLatest } from 'redux-saga/effects';
import { ACTIONS, SORT, SEARCH } from '../constants/app-constants';

export const setEmptyResults = () => ({
    type: ACTIONS.SET_EMPTY_RESULTS,
});

export const setSearchURL = searchURL => ({
    type: ACTIONS.SET_SEARCH_URL,
    searchURL,
});

export const switchSort = (sort, results) => ({
    type: ACTIONS.SWITCH_SORT,
    sort,
    results,
});

export const getMoviesByGenresAction = results => ({
    type: ACTIONS.GET_MOVIES_BY_GENRES,
    results,
});

export const fullFilmLoad = json => ({
    type: ACTIONS.FULL_FILM_LOAD,
    filmData: json,
});

export const returnToMainPage = () => ({
    type: ACTIONS.RETURN_TO_MAIN_PAGE,
});

export const updateInputValue = value => ({
    type: ACTIONS.UPDATE_INPUT_VALUE,
    value,
});

export const resetInputValue = () => ({
    type: ACTIONS.RESET_INPUT_VALUE,
});

export const searchHandler = (results, sortBy, searchBy, input) => ({
    type: ACTIONS.SEARCH,
    results,
    sortBy,
    searchBy,
    input,
});

export const switchSearch = search => ({
    type: ACTIONS.SWITCH_SEARCH,
    search,
});

export const fetchMovies = (sort, search, inputValue) => ({
    type: ACTIONS.FETCH_MOVIES,
    payload: {
        sort,
        search,
        inputValue,
    },
});

export const fetchMoviesByGenres = genre => ({
    type: ACTIONS.FETCH_MOVIES_BY_GENRES,
    payload: {
        genre,
    },
});

export const fetchMoviesById = id => ({
    type: ACTIONS.FETCH_MOVIES_BY_ID,
    payload: {
        id,
    },
});

export const switchSortAsyncAction = (sort, stateSort, inputValue, search) => ({
    type: ACTIONS.SWITCH_SORT_ASYNC_ACTION,
    payload: {
        sort,
        stateSort,
        inputValue,
        search,
    },
});

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
    yield takeLatest(ACTIONS.FETCH_MOVIES_BY_GENRES, getMoviesByGenres);
}

export function* fullLoad(action) {
    const id = action.payload.id;

    const response = yield call(fetch, `http://react-cdp-api.herokuapp.com/movies/${id}`);
    const results = yield response.json();
    if (results.id) {
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
    const {
        sort, inputValue, search,
    } = action.payload;

    const response = yield call(fetch, `http://react-cdp-api.herokuapp.com/movies?sortBy=${SORT[sort]}&sortOrder=desc&search=${inputValue}&searchBy=${SEARCH[search]}&limit=12`);
    const results = yield response.json();

    yield put(switchSort(sort, results));
}

export function* watchSwitchSort() {
    yield takeLatest(ACTIONS.SWITCH_SORT_ASYNC_ACTION, switchSortAction);
}
