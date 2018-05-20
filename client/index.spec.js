import reducer from './store';

import { INITIAL_STATE, ACTIONS } from './constants/app-constants';

describe('reducer', function () {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual( INITIAL_STATE )
    });

    it('should handle return to main page action', () => {
        expect(reducer(INITIAL_STATE, {
            type: ACTIONS.RETURN_TO_MAIN_PAGE
        })).toEqual( { ...INITIAL_STATE, 
                       fullItem: {
                           isActive: false
                        } 
                    })
    });
    it('should handle update input value action', () => {
        expect(reducer(INITIAL_STATE, {
                type: ACTIONS.UPDATE_INPUT_VALUE,
                value: "INPUT"
        })).toEqual({ ...INITIAL_STATE, 
                       inputValue: "INPUT"
                    })
    });
    it('should handle reset input value action', () => {
        expect(reducer({ ...INITIAL_STATE, inputValue: "INPUT"}, {
                type: ACTIONS.RESET_INPUT_VALUE
        })).toEqual(INITIAL_STATE)
    });
    it('should handle update input value action', () => {
        expect(reducer(INITIAL_STATE, {
                type: ACTIONS.SEARCH,
                results: {
                    data: [{
                        title: "title"
                    }],
                    total: 1
                }
        })).toEqual({ ...INITIAL_STATE, 
                    results: {
                        data: [{
                            title: "title"
                        }],
                        total: 1
                    },
                    resultsCount: 1,
                    searchInfo: {
                        search: 'title',
                        value: ""
                    }
            })
    });

    it('should handle switch search action', () => {
        expect(reducer(INITIAL_STATE, {
                type: ACTIONS.SWITCH_SEARCH,
                search: 'title'
        })).toEqual({ ...INITIAL_STATE, 
                       search: 'title'
                    })
    });

    it('should handle switch sort action', () => {
        expect(reducer(INITIAL_STATE, {
                type: ACTIONS.SWITCH_SORT,
                sort: 'rating',
                results: {
                    data: [{
                        title: 'title'
                    }],
                    total: 1
                },
        })).toEqual({ ...INITIAL_STATE, 
                       sort: 'rating',
                       results: {
                            data: [{
                                title: 'title'
                            }],
                            total: 1
                        }
                    })
    });
    it('should load full film item', () => {
        expect(reducer(INITIAL_STATE, {
                type: ACTIONS.FULL_FILM_LOAD,
                filmData: {
                    id: 123
                }
        })).toEqual({ ...INITIAL_STATE, 
                       search: 'title',
                       fullItem: {
                            isActive: true,
                            filmData: {
                                id: 123
                            }
                        }
                    })
    });
});