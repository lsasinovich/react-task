import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fullLoad, returnToMainPage } from '../../action-creators';

import './full-film-item.scss';

class FullFilmItem extends React.Component {
    componentWillMount() {
        this.props.fullLoad(this.props.match.params.id);
    }

    render() {
        const filmData = this.props.user.fullItem.filmData;
        return (
            <div className="full-film-item">
                <img src={filmData.poster_path} />
                <div className="full-film-info">
                    <div className="title-and-rating">
                        <p className="title">{filmData.title}</p>
                        { !!filmData.vote_average && 
                            <p className="rating">{filmData.vote_average}</p>
                        }
                    </div>
                    <p>{filmData.tagline}</p>
                    <p className="year-and-time">
                        <span className="year">{filmData.release_date.slice(0, 4)}</span>
                        { filmData.runtime &&
                            <span>{filmData.runtime} min</span>
                        }
                    </p>
                    <p className="description">{filmData.overview}</p>
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = {
    fullLoad
}

const mapStateToProps = (state) => {
    return {
        user: state,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FullFilmItem);