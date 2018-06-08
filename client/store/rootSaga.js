import { all } from 'redux-saga/effects';

import {
    watchFetchMovies,
    watchFetchMoviesById,
    watchSwitchSort,
    watchFetchMoviesByGenres,
} from './action-creators';

function* moviesSaga() {
    yield all([
        watchFetchMovies(),
        watchFetchMoviesById(),
        watchSwitchSort(),
        watchFetchMoviesByGenres(),
    ]);
}

export default function* rootSaga() {
    yield all([
        moviesSaga(),
    ]);
}
