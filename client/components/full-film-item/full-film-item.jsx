import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './full-film-item.scss';

class FullFilmItem extends React.Component {
    render() {
        const {filmData} = this.props;
        console.log(filmData);
        return (
            <div className="full-film-item">
                <img src={filmData.poster_path} />
                <div className="full-film-info">
                    <div className="title-and-rating">
                        <p className="title">{filmData.title}</p>
                        <p className="rating">{filmData.vote_average}</p>
                    </div>
                    <p>{this.props.user.fullItem.filmData.tagline}</p>
                    <p className="year-and-time">
                        <span className="year">{filmData.release_date.slice(0, 4)}</span>
                        <span>{filmData.runtime} min</span>
                    </p>
                    <p className="description">{filmData.overview}</p>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        user: state,
        filmData: state.fullItem.filmData
    };
};

export default connect(mapStateToProps)(FullFilmItem);