//@flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Nextflixroulette } from '../nextflixroulette/nextflixroulette';

import './header.scss';
import {
    updateInputValue,
    searchHandler,
    returnToMainPage,
    resetInputValue,
    switchSearch,
    fetchMovies,
    setSearchURL,
} from '../../store/action-creators';

type OwnProps = {
    location: {
        pathname: string
    },
    match: {
        params: {
            inputValue: string,
        }
    },
    history: any,
    children: any
}

type StateProps = {
    user: {
        inputValue: string,
        fullItem: {
            isActive: boolean
        },
        sort: string,
        search: string
    },
};

type DispatchProps = {
    updateInputValue: Function,
    searchHandler: Function,
    returnToMainPage: Function,
    resetInputValue: Function,
    switchSearch: Function,
    fetchMovies: Function,
    setSearchURL: Function,
};

type Props = StateProps & DispatchProps & OwnProps;

class Header extends React.Component<Props> {
    componentWillMount() {
        if (!this.props.location || this.props.location.pathname === '/') return;
        this.props.fetchMovies(this.props.user.sort, this.props.user.search, this.props.match.params.inputValue);
    }

    render() {
        return (
            <div className="header">
                <div className="return-div">
                    <Nextflixroulette/>
                </div>
                { !this.props.user.fullItem.isActive &&
                <div>
                    <p className="find-movie">FIND YOUR MOVIE</p>
                    <div className="search-wrapper">
                        <input className="search-bar"
                            placeholder="Let's find your movie"
                            value={this.props.user.inputValue}
                            onChange={event => this.props.updateInputValue(event.target.value)}
                            onKeyPress={ (event) => {
                                if (event.key === 'Enter') {
                                    this.props.history.push(`/search/${this.props.user.inputValue}`);
                                    this.props.setSearchURL(`/search/${this.props.user.inputValue}`);
                                    this.props.fetchMovies(this.props.user.sort, this.props.user.search, this.props.user.inputValue);
                                }
                            }
                            }
                        >
                        </input>
                        {this.props.user.inputValue === '' ?
                            <img className="arrow" src={require('../../images/arrow.png')} /> :
                            <img className="cross" src={require('../../images/cross.png')} onClick={() => this.props.resetInputValue()} />
                        }
                    </div>
                    <div className="button-group cl-white">
                        <div>
                            <p className="search-by">SEARCH BY</p>
                            <button className={`btn genre-button ${this.props.user.search === 'genres' ? 'bg-red' : 'bg-grey'} cl-white`} onClick={() => this.props.switchSearch('genres')}>GENRE</button>
                            <button className={`btn title-button ${this.props.user.search === 'title' ? 'bg-red' : 'bg-grey'} cl-white`} onClick={() => this.props.switchSearch('title')}>TITLE</button>
                        </div>
                        <Link to={`/search/${this.props.user.inputValue}`}
                            onClick={() => {
                                this.props.setSearchURL(`${this.props.user.inputValue}`);
                                this.props.fetchMovies(this.props.user.sort, this.props.user.search, this.props.user.inputValue);
                            }}>
                            <button className='btn search-button bg-red cl-white'>SEARCH</button>
                        </Link>
                    </div>
                </div>
                }
                {this.props.children}
            </div>
        );
    }
}
const mapDispatchToProps = {
    updateInputValue,
    searchHandler,
    returnToMainPage,
    resetInputValue,
    switchSearch,
    fetchMovies,
    setSearchURL,
};

const mapStateToProps = (state) : StateProps => ({
    user: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
