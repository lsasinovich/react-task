import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Nextflixroulette } from '../nextflixroulette/nextflixroulette';
import FullFilmItem from '../full-film-item/full-film-item';

import './header.scss';
import { ACTIONS, SEARCH } from '../../constants/app-constants';

class Header extends React.Component {
    updateInputValue (event) {
        const value = event.target.value;
        this.props.updateInputValue(value);
    }

    getMovie(search) {
        return fetch(`http://react-cdp-api.herokuapp.com/movies?sortBy=${SEARCH[this.props.user.sort]}&search=${this.props.user.inputValue}&searchBy=${SEARCH[search] || this.props.user.search}&limit=12`)
          .then(response => response.json())
          .then(json => this.props.searchHandler(json))
    }

    render() {
        return (
            <div className="header">
            <div className="return-div">
                <Nextflixroulette/>
                { this.props.user.fullItem.isActive && 
                    <button className="btn return-button cl-red bg-white" onClick={this.props.returnToMainPage}>SEARCH</button> 
                }
            </div>
            { !this.props.user.fullItem.isActive ?
                <div>
                <p className="find-movie">FIND YOUR MOVIE</p>
                <div className="search-wrapper">
                    <input className="search-bar" 
                        placeholder="Let's find your movie" 
                        value={this.props.user.inputValue} 
                        onChange={(event)=>this.updateInputValue(event)}
                        onKeyPress={ (event) => {
                            if (event.key == 'Enter') { 
                                this.getMovie();
                            }
                        }
                    }
                    >
                    </input>
                    {this.props.user.inputValue === "" ? 
                        <img className="arrow" src={require('../../images/arrow.png')} /> :
                        <img className="cross" src={require('../../images/cross.png')} onClick={this.props.resetInputValue} />
                    }
                </div>
                <div className="button-group cl-white">
                    <div>
                        <p className="search-by">SEARCH BY</p>
                        <button className={`btn genre-button ${this.props.user.search === "genres" ? "bg-red" : "bg-grey"} cl-white`} onClick={()=>this.props.switchSearch('genres')}>GENRE</button>
                        <button className={`btn title-button ${this.props.user.search === "title" ? "bg-red" : "bg-grey"} cl-white`} onClick={()=>this.props.switchSearch('title')}>TITLE</button>
                    </div>
                    <button className='btn search-button bg-red cl-white' onClick={()=>this.getMovie()}>SEARCH</button>
                </div>
                </div> :
                <FullFilmItem />
            }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        returnToMainPage: () => {
            dispatch({
                type: ACTIONS.RETURN_TO_MAIN_PAGE
            })
        },
        updateInputValue: (value) => {
            dispatch({
                type: ACTIONS.UPDATE_INPUT_VALUE,
                value: value
            })
        },
        resetInputValue: () => {
            dispatch({
                type: ACTIONS.RESET_INPUT_VALUE
            })
        },
        searchHandler: (results) => {
            dispatch({
                type: ACTIONS.SEARCH,
                results: results
            })
        },
        switchSearch: (search) => {
            dispatch({
                type: ACTIONS.SWITCH_SEARCH,
                search: search
            })

        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);