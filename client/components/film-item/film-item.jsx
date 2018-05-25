import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './film-item.scss';
import { ACTIONS } from '../../constants/app-constants';
import { fullLoad } from '../../action-creators';
import { Link } from 'react-router-dom';

class FilmItem extends React.Component {
    render() {
        return (
            <div className="film-item">
                { this.props.posterUrl ?
                    <img src={this.props.posterUrl}/> :
                    <img src={require('../../images/noposter.jpg')}/>
                }
                <div className="film-info">
                    <div>
                        <Link to={`/film/${this.props.id}`} onClick={()=>this.props.fullLoad(this.props.id)}><p className="title">{this.props.title}</p></Link>
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

const mapDispatchToProps = {
    fullLoad
}

const mapStateToProps = (state) => {
    return {
        user: state
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmItem);