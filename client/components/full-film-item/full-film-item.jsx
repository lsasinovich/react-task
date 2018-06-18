// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import { fetchMoviesById, returnToMainPage, fetchMovies } from '../../store/action-creators';
import { getFilmIdFromState } from '../../selectors';

import './full-film-item.scss';

type OwnProps = {
    match: {
        params: {
            id: number,
        }
    }
}

type StateProps = {
    user: {
        fullItem: {
            filmData: {
                vote_average: number,
                inputValue: string,
                release_date: string,
                runtime: number,
                overview: string,
                poster_path: string,
                title: string,
                tagline: string,
            }
        },
        inputValue: string,
        search: string,
        sort: string
    },
};

type DispatchProps = {
    fetchMoviesById: Function,
    returnToMainPage: Function,
    fetchMovies: Function,
};

type Props = StateProps & DispatchProps & OwnProps;

class FullFilmItem extends React.Component<Props> {
    componentWillMount() {
        this.props.fetchMoviesById(getFilmIdFromState(this.props.match.params.id));
    }

    render() {
        if (this.props.user.fullItem.filmData) {
            return (
                <div className="full-film-item">
                    <Link to={`/search/${this.props.user.inputValue}`}
                        onClick={() => {
                            this.props.returnToMainPage();
                            this.props.fetchMovies(this.props.user.sort, this.props.user.search, this.props.user.inputValue);
                        }
                        }>
                        <Button size="sm" className="return-button">SEARCH</Button>
                    </Link>
                    <div className="d-flex">
                        <img src={this.props.user.fullItem.filmData.poster_path} />
                        <div className="full-film-info">
                            <div className="title-and-rating">
                                <p className="title">{this.props.user.fullItem.filmData.title}</p>
                                {!!this.props.user.fullItem.filmData.vote_average &&
                                    <p className="rating">{this.props.user.fullItem.filmData.vote_average}</p>
                                }
                            </div>
                            <p>{this.props.user.fullItem.filmData.tagline}</p>
                            <p className="year-and-time">
                                <span className="year">{this.props.user.fullItem.filmData.release_date.slice(0, 4)}</span>
                                {this.props.user.fullItem.filmData.runtime &&
                                    <span>{this.props.user.fullItem.filmData.runtime} min</span>
                                }
                            </p>
                            <p className="description">{this.props.user.fullItem.filmData.overview}</p>
                        </div>
                    </div>
                </div>
            );
        } return null;
    }
}

const mapDispatchToProps = {
    fetchMoviesById,
    returnToMainPage,
    fetchMovies,
};

const mapStateToProps = (state): StateProps => ({
    user: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(FullFilmItem);
