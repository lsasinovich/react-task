import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './film-item.scss';
import { ACTIONS } from '../../constants/app-constants';

class FilmItem extends React.Component {
    fullFilmLoad(id) {
        return fetch(`http://react-cdp-api.herokuapp.com/movies/${id}`)
              .then(response => response.json())
              .then(json => this.props.fullFilmLoad(json));
    }

    render() {
        return (
            <div className="film-item">
                { this.props.posterUrl ?
                    <img src={this.props.posterUrl}/> :
                    <img src={require('../../images/noposter.jpg')}/>
                }
                <div className="film-info">
                    <div>
                        <p className="title" onClick={()=>this.fullFilmLoad(this.props.id)}>{this.props.title}</p>
                        <p className="genre">{this.props.genres}</p>
                    </div>
                    <p className="year">{this.props.year}</p>
                </div>
            </div>
        );
    }
}

FilmItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    posterUrl: PropTypes.string,
    genres: PropTypes.string,
    year: PropTypes.number,
};

const mapStateToProps = (state) => {
    return {
        user: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fullFilmLoad: (json) => {
            dispatch({
                type: ACTIONS.FULL_FILM_LOAD,
                filmData: json
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmItem);