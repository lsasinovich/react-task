import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { reducers } from './store/store';

import { INITIAL_STATE, ACTIONS } from './constants/app-constants';
import {
    switchSort,
    fullFilmLoad,
    updateInputValue,
    returnToMainPage,
    resetInputValue,
    searchHandler,
    switchSearch,
    getMovie,
    fullLoad,
    switchSortAction,
} from './store/action-creators';

const mockResults = {
    id: 123,
    title: 'title',
    vote_average: 'vote_average',
};

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(reducers(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should handle return to main page action', () => {
        expect(reducers(
            INITIAL_STATE,
            {
                type: ACTIONS.RETURN_TO_MAIN_PAGE,
            },
        )).toEqual({
            ...INITIAL_STATE,
            fullItem: {
                isActive: false,
            },
        });
    });
    it('should handle update input value action', () => {
        expect(reducers(
            INITIAL_STATE,
            {
                type: ACTIONS.UPDATE_INPUT_VALUE,
                value: 'INPUT',
            },
        )).toEqual({
            ...INITIAL_STATE,
            inputValue: 'INPUT',
        });
    });
    it('should handle reset input value action', () => {
        expect(reducers(
            {
                ...INITIAL_STATE,
                inputValue: 'INPUT',
            },
            {
                type: ACTIONS.RESET_INPUT_VALUE,
            },
        )).toEqual(INITIAL_STATE);
    });
    it('should handle update input value action', () => {
        expect(reducers(INITIAL_STATE, {
            type: ACTIONS.SEARCH,
            results: {
                data: [{
                    title: 'title',
                }],
                total: 1,
            },
        })).toEqual({
            ...INITIAL_STATE,
            results: {
                data: [{
                    title: 'title',
                }],
                total: 1,
            },
            resultsCount: 1,
            searchInfo: {
                search: 'title',
                value: '',
            },
        });
    });

    it('should handle switch search action', () => {
        expect(reducers(INITIAL_STATE, {
            type: ACTIONS.SWITCH_SEARCH,
            search: 'title',
        })).toEqual({
            ...INITIAL_STATE,
            search: 'title',
        });
    });

    it('should handle switch sort action', () => {
        expect(reducers(INITIAL_STATE, {
            type: ACTIONS.SWITCH_SORT,
            sort: 'rating',
            results: {
                data: [{
                    title: 'title',
                }],
                total: 1,
            },
        })).toEqual({
            ...INITIAL_STATE,
            sort: 'rating',
            results: {
                data: [{
                    title: 'title',
                }],
                total: 1,
            },
        });
    });
    it('should load full film item', () => {
        expect(reducers(INITIAL_STATE, {
            type: ACTIONS.FULL_FILM_LOAD,
            filmData: {
                id: 123,
            },
        })).toEqual({
            ...INITIAL_STATE,
            search: 'title',
            fullItem: {
                isActive: true,
                filmData: {
                    id: 123,
                },
            },
        });
    });
});


describe('actions', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('should create an action to switch sort', () => {
        const expectedAction = {
            type: ACTIONS.SWITCH_SORT,
            sort: 'sort',
            results: mockResults,
        };
        expect(switchSort('sort', mockResults)).toEqual(expectedAction);
    });

    it('should create an action to full film load', () => {
        const expectedAction = {
            type: ACTIONS.FULL_FILM_LOAD,
            filmData: mockResults,
        };
        expect(fullFilmLoad(mockResults)).toEqual(expectedAction);
    });

    it('should create an action to return to main page', () => {
        const expectedAction = {
            type: ACTIONS.RETURN_TO_MAIN_PAGE,
        };
        expect(returnToMainPage()).toEqual(expectedAction);
    });

    it('should create an action to update input value', () => {
        const expectedAction = {
            type: ACTIONS.UPDATE_INPUT_VALUE,
            value: 'value',
        };
        expect(updateInputValue('value')).toEqual(expectedAction);
    });

    it('should create an action to reset input value', () => {
        const expectedAction = {
            type: ACTIONS.RESET_INPUT_VALUE,
        };
        expect(resetInputValue()).toEqual(expectedAction);
    });

    it('should create an action to search handler', () => {
        const expectedAction = {
            type: ACTIONS.SEARCH,
            results: mockResults,
        };
        expect(searchHandler(mockResults)).toEqual(expectedAction);
    });

    it('should create an action to switch search', () => {
        const expectedAction = {
            type: ACTIONS.SWITCH_SEARCH,
            search: 'search',
        };
        expect(switchSearch('search')).toEqual(expectedAction);
    });

    it('should create an action to get movie', () => {
        const expectedActions = [{
            type: 'SEARCH',
            results: mockResults,
        }];

        fetchMock
            .getOnce(
                'http://react-cdp-api.herokuapp.com/movies?sortBy=sort&sortOrder=desc&search=input&searchBy=title&limit=12',
                mockResults,
            );

        const store = mockStore(INITIAL_STATE);

        return store.dispatch(getMovie('title', 'sort', 'input')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should create an action to full load', () => {
        const expectedActions = [{
            type: 'FULL_FILM_LOAD',
            filmData: mockResults,
        }];

        fetchMock
            .getOnce(
                'http://react-cdp-api.herokuapp.com/movies/123456',
                mockResults,
            );

        const store = mockStore(INITIAL_STATE);

        return store.dispatch(fullLoad(123456)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should create an action to switch sort', () => {
        const expectedActions = [{
            type: 'SWITCH_SORT',
            sort: 'releaseDate',
            results: mockResults,
        }];

        fetchMock
            .getOnce(
                'http://react-cdp-api.herokuapp.com/movies?sortBy=release_date&sortOrder=desc&search=inputValue&searchBy=title&limit=12',
                mockResults,
            );

        const store = mockStore(INITIAL_STATE);

        return store.dispatch(switchSortAction('releaseDate', 'stateSort', 'inputValue', 'title')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
