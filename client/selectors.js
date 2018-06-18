import { createSelector } from 'reselect';
import { switchSearch } from './store/action-creators';

const getSearch = search => search;
export const getSearchFromState = state => state.search;

export const switchSearchAction = createSelector(
    [getSearch],
    (search) => {
        console.log('here');
        return switchSearch(search);
    },
);
