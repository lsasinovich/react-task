export const SEARCH = {
    genres: 'genres',
    title: 'title'
};

export const SORT = {
    rating: "vote_average",
    releaseDate: "release_date"
}

export const ACTIONS = {
    SET_EMPTY_RESULTS: "SET_EMPTY_RESULTS",
    RETURN_TO_MAIN_PAGE: "RETURN_TO_MAIN_PAGE",
    UPDATE_INPUT_VALUE: "UPDATE_INPUT_VALUE",
    RESET_INPUT_VALUE: "RESET_INPUT_VALUE",
    SEARCH: "SEARCH",
    SWITCH_SEARCH: "SWITCH_SEARCH",
    SWITCH_SORT: "SWITCH_SORT",
    FULL_FILM_LOAD: "FULL_FILM_LOAD",
    PAGINATION_HANDLER: "PAGINATION_HANDLER",
    GET_MOVIES_BY_GENRES: "GET_MOVIES_BY_GENRES"
}

export const ITEM_COUNT_PER_PAGE = 12;
export const PAGE_RANGE_DISPLAYED = 5;

export const INITIAL_STATE = {
    searchInfo: {},
    results: {
        data:[]
    },
    fullItem: {
        isActive: false
    },
    inputValue: "",
    sort: "releaseDate",
    search: 'title',
    resultsCount: -1
}