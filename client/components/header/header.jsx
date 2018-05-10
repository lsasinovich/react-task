import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Nextflixroulette } from '../nextflixroulette/nextflixroulette';
import { FullFilmItem } from '../full-film-item/full-film-item';

import './header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    updateInputValue (event) {
        const value = event.target.value;
        this.props.updateInputValue(value);
    }
    render() {
        return (
            <div className="header">
            <div className="return-div">
                <Nextflixroulette/>
                { this.props.user.fullItem && 
                    <button className="btn return-button cl-red bg-white" onClick={this.props.returnToMainPage}>SEARCH</button> 
                }
            </div>
            { !this.props.user.fullItem ?
                <div>
                <p className="find-movie">FIND YOUR MOVIE</p>
                <div className="search-wrapper">
                    <input className="search-bar" 
                           placeholder="Let's find your movie" 
                           value={this.props.user.inputValue} 
                           onChange={this.updateInputValue.bind(this, event)}
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
                        <button className={`btn genre-button ${this.props.user.search === "genre" ? "bg-red" : "bg-grey"} cl-white`} onClick={()=>this.props.switchSearch('genre')}>GENRE</button>
                        <button className={`btn title-button ${this.props.user.search === "title" ? "bg-red" : "bg-grey"} cl-white`} onClick={()=>this.props.switchSearch('title')}>TITLE</button>
                    </div>
                    <button className='btn search-button bg-red cl-white' onClick={this.props.searchHendler}>SEARCH</button>
                </div>
                </div> :
                <FullFilmItem />
            }
            </div>
        );
    }
}


Header.propTypes = {
    filmItem: PropTypes.bool
};

Header.defaultProps = {
    filmItem: false
};


const mapStateToProps = (state) => {
    return {
        user: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        returnToMainPage: () => {
            dispatch({
                type: 'RETURN_TO_MAIN_PAGE'
            })
        },
        updateInputValue: (value) => {
            dispatch({
                type: 'UPDATE_INPUT_VALUE',
                value: value
            })
        },
        resetInputValue: () => {
            dispatch({
                type: 'RESET_INPUT_VALUE'
            })
        },
        searchHendler: () => {
            dispatch({
                type: 'SEARCH_HENDLER'
            })
        },
        switchSearch: (search) => {
            dispatch({
                type: 'SEARCH_TYPE_HENDLER',
                search: search
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);