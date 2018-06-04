import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMoviesById, returnToMainPage, fetchMovies } from '../../store/action-creators';

import './full-film-item.scss';

class FullFilmItem extends React.Component {
    componentWillMount() {
        this.props.fetchMoviesById(this.props.match.params.id);
    }

    render() {
        if (this.props.user.fullItem.filmData) {
        return (
            <div>
            <Link to={`/search/${this.props.user.inputValue}`} onClick={()=>{this.props.returnToMainPage(); this.props.fetchMovies(this.props.user.sort, this.props.user.search, this.props.user.inputValue);}}><button className="btn return-button cl-red bg-white">SEARCH</button></Link>
            <div className="full-film-item">
                <img src={this.props.user.fullItem.filmData.poster_path} />
                <div className="full-film-info">
                    <div className="title-and-rating">
                        <p className="title">{this.props.user.fullItem.filmData.title}</p>
                        { !!this.props.user.fullItem.filmData.vote_average && 
                            <p className="rating">{this.props.user.fullItem.filmData.vote_average}</p>
                        }
                    </div>
                    <p>{this.props.user.fullItem.filmData.tagline}</p>
                    <p className="year-and-time">
                        <span className="year">{this.props.user.fullItem.filmData.release_date.slice(0, 4)}</span>
                        { this.props.user.fullItem.filmData.runtime &&
                            <span>{this.props.user.fullItem.filmData.runtime} min</span>
                        }
                    </p>
                    <p className="description">{this.props.user.fullItem.filmData.overview}</p>
                </div>
            </div>
        </div>
        );
    } else return null;
    }
};

const mapDispatchToProps = {
    fetchMoviesById,
    returnToMainPage,
    fetchMovies
}

const mapStateToProps = (state) => {
    return {
        user: state,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FullFilmItem);