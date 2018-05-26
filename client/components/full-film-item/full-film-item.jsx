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
        
        return (
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