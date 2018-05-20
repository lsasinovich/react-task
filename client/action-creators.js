import { ACTIONS, SORT, SEARCH } from './constants/app-constants';

export function switchSort(sort, results) {
    return {
        type: ACTIONS.SWITCH_SORT,
        sort: sort,
        results: results
    }
}

export function fullFilmLoad(json) {
    return {
        type: ACTIONS.FULL_FILM_LOAD,
        filmData: json
    };
}

export function returnToMainPage() {
    return {
        type: ACTIONS.RETURN_TO_MAIN_PAGE
    };
}

export function updateInputValue(event) {
    const value = event.target.value;

    return {
        type: ACTIONS.UPDATE_INPUT_VALUE,
        value: value
    };
}

export function resetInputValue() {
    return {
        type: ACTIONS.RESET_INPUT_VALUE
    };
}

export function searchHandler (results) {
    return {
        type: ACTIONS.SEARCH,
        results: results
    };
}

export function switchSearch (search) {
    return {
        type: ACTIONS.SWITCH_SEARCH,
        search: search
    };

}

export function getMovie(dispatch, search, sort, inputValue) {
    return fetch(`http://react-cdp-api.herokuapp.com/movies?sortBy=${sort}&sortOrder=desc&search=${inputValue}&searchBy=${SEARCH[search]}&limit=12`)
      .then(response => response.json())
      .then(json => dispatch(searchHandler(json)))
}

export function fullLoad(dispatch, id) {
    return fetch(`http://react-cdp-api.herokuapp.com/movies/${id}`)
          .then(response => response.json())
          .then(json => dispatch(fullFilmLoad(json)));
}

export function switchSortAction (dispatch, sort, stateSort, inputValue, search) {
    if(sort !== stateSort) {
        return fetch(`http://react-cdp-api.herokuapp.com/movies?sortBy=${SORT[sort]}&sortOrder=desc&search=${inputValue}&searchBy=${SEARCH[search]}&limit=12`)
        .then(response => response.json())
        .then(json => dispatch(switchSort(sort, json)))
    }
}