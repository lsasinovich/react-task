import { ACTIONS, SORT, SEARCH } from './constants/app-constants';


export const setEmptyResults = () => {
    return {
        type: ACTIONS.SET_EMPTY_RESULTS
    }
}

export const switchSort = (sort, results) => {
    return {
        type: ACTIONS.SWITCH_SORT,
        sort: sort,
        results: results
    }
}

export const fullFilmLoad = (json) => {
    return {
        type: ACTIONS.FULL_FILM_LOAD,
        filmData: json
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

export const searchHandler = (results) => {
    return {
        type: ACTIONS.SEARCH,
        results: results
    };
}

export const switchSearch = (search) => {
    return {
        type: ACTIONS.SWITCH_SEARCH,
        search: search
    };

}

export const getMovie = (search, sort, inputValue) => dispatch => {
    return fetch(`http://react-cdp-api.herokuapp.com/movies?sortBy=${sort}&sortOrder=desc&search=${inputValue}&searchBy=${SEARCH[search]}&limit=12`)
      .then(response => response.json())
      .then(json => dispatch(searchHandler(json)))
}

export const fullLoad = (id) => dispatch => {
    return fetch(`http://react-cdp-api.herokuapp.com/movies/${id}`)
          .then(response => response.json())
          .then(json => dispatch(fullFilmLoad(json)));
}

export const switchSortAction = (sort, stateSort, inputValue, search) => dispatch => {
        return fetch(`http://react-cdp-api.herokuapp.com/movies?sortBy=${SORT[sort]}&sortOrder=desc&search=${inputValue}&searchBy=${SEARCH[search]}&limit=12`)
        .then(response => response.json())
        .then(json => dispatch(switchSort(sort, json)))
}