import { ACTIONS, SORT, SEARCH } from '../constants/app-constants';


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

export const getMovie = (sort, search, inputValue, location) => dispatch => {
    const params = new URLSearchParams(location.search); 
    const input = params.get('inputValue') || inputValue;
    const searchBy = params.get('searchBy') || search;
    const sortBy = params.get('sortBy') || sort;
    return fetch(`http://react-cdp-api.herokuapp.com/movies?sortBy=${SORT[sortBy]}&sortOrder=desc&search=${input}&searchBy=${SEARCH[searchBy]}&limit=12`)
      .then(response => response.json())
      .then(json => dispatch(searchHandler(json, sortBy, searchBy, input)))
      .catch(function(error) {
        window.location.pathname = '/not_found';
        console.log('Can not find films with this criteria');
      });
}

export const getMoviesByGenres = (genres) => dispatch => {
    console.log(`http://react-cdp-api.herokuapp.com/movies?search=${genres}&searchBy=genres&limit=12`);
    return fetch(`http://react-cdp-api.herokuapp.com/movies?search=${genres}&searchBy=genres&limit=12`)
          .then(response => response.json())
          .then(json => {
              dispatch(getMoviesByGenresAction(json))
          })
}

export const fullLoad = (id) => dispatch => {

    return fetch(`http://react-cdp-api.herokuapp.com/movies/${id}`)
          .then(response => response.json())
          .then(json => {
              dispatch(fullFilmLoad(json))
              dispatch(getMoviesByGenres(json.genres[0]))
          })
        //   .catch(function(error) {
        //     window.location.pathname = '/not_found';
        //     console.log('Can not load this film');
        //   });
}

export const switchSortAction = (sort, stateSort, inputValue, search) => dispatch => {
        return fetch(`http://react-cdp-api.herokuapp.com/movies?sortBy=${SORT[sort]}&sortOrder=desc&search=${inputValue}&searchBy=${SEARCH[search]}&limit=12`)
        .then(response => response.json())
        .then(json => dispatch(switchSort(sort, json)))
        .catch(function(error) {
            window.location.pathname = '/not_found';
            console.log('Can not switch sort');
        });
}