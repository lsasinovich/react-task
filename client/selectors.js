import { createSelector } from 'reselect';

const getSearch = search => search;

export const getSearchFromState = createSelector(
    [getSearch],
    search => search,
);

const getInput = inputValue => inputValue;

export const getInputValueFromState = createSelector(
    [getInput],
    input => input,
);

const getSort = sort => sort;

export const getSortFromState = createSelector(
    [getSort],
    sort => sort,
);

const getFilmId = id => id;

export const getFilmIdFromState = createSelector(
    [getFilmId],
    id => id,
);
