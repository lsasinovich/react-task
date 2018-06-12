// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { InputGroup, Input, Button } from 'reactstrap';
import type { ContextRouter } from 'react-router';

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

import Cross from '../../images/cross.png';
import Arrow from '../../images/arrow.png';

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

type Props = StateProps & DispatchProps & OwnProps & ContextRouter;

class Header extends React.Component<Props> {
    componentWillMount() {
        if (!this.props.location || this.props.location.pathname === '/') return;
        this.props.fetchMovies(this.props.user.sort, this.props.user.search, this.props.match.params.inputValue);
    }

    render() {
        return (
            <div className="header">
                <div className="return-div">
                    <Nextflixroulette />
                </div>
                {!this.props.user.fullItem.isActive &&
                    <div>
                        <p className="find-movie">FIND YOUR MOVIE</p>
                        <div className="search-wrapper">
                            <InputGroup>
                                <Input className="search-bar" placeholder="Let's find your movie"
                                    value={this.props.user.inputValue}
                                    onChange={event => this.props.updateInputValue(event.target.value)}
                                    onKeyPress={(event) => {
                                        if (event.key === 'Enter') {
                                            this.props.history.push(`/search/${this.props.user.inputValue}`);
                                            this.props.setSearchURL(`/search/${this.props.user.inputValue}`);
                                            this.props.fetchMovies(
                                                this.props.user.sort,
                                                this.props.user.search,
                                                this.props.user.inputValue,
                                            );
                                        }
                                    }} />
                                {this.props.user.inputValue === '' ?
                                    <img className="arrow" src={Arrow} /> :
                                    <img className="cross" src={Cross} onClick={() => this.props.resetInputValue()} />
                                }
                            </InputGroup>
                        </div>
                        <div className="button-group cl-white">
                            <div>
                                <p className="search-by">SEARCH BY</p>
                                <Button
                                    className="genre-button"
                                    size='sm'
                                    color={this.props.user.search === 'genres' ? 'danger' : 'secondary'}
                                    onClick={() => this.props.switchSearch('genres')}
                                >
                                    GENRE
                                </Button>
                                <Button
                                    size='sm'
                                    color={this.props.user.search === 'title' ? 'danger' : 'secondary'}
                                    onClick={() => this.props.switchSearch('title')}
                                >
                                    TITLE
                                </Button>
                            </div>
                            <Link to={`/search/${this.props.user.inputValue}`}
                                onClick={() => {
                                    this.props.setSearchURL(`${this.props.user.inputValue}`);
                                    this.props.fetchMovies(
                                        this.props.user.sort,
                                        this.props.user.search,
                                        this.props.user.inputValue,
                                    );
                                }}>
                                {this.props.user.inputValue ?
                                    <Button color="danger" size="sm">SEARCH</Button> :
                                    <Button color="danger" size="sm" disabled >SEARCH</Button>
                                }
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

const mapStateToProps = (state): StateProps => ({
    user: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
