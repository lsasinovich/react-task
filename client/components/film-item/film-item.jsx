//@flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './film-item.scss';
import { fetchMoviesById } from '../../store/action-creators';

type OwnProps = {
    id: number,
    title: string,
    posterUrl: string,
    genres: string,
    year: number,
};

type StateProps = {
    user: any
};

type DispatchProps = {
    fetchMoviesById: Function,
};

type Props = StateProps & DispatchProps & OwnProps;

class FilmItem extends React.Component<Props> {
    render() {
        return (
            <div className="film-item">
                {this.props.posterUrl ?
                    <img src={this.props.posterUrl} /> :
                    <img src={require('../../images/noposter.jpg')} />
                }
                <div className="film-info">
                    <div>
                        <Link to={`/film/${this.props.id}`} onClick={() => this.props.fetchMoviesById(this.props.id)}><p className="title">{this.props.title}</p></Link>
                        <p className="genre">{this.props.genres}</p>
                    </div>
                    <p className="year">{this.props.year}</p>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchMoviesById,
};

const mapStateToProps = (state) : StateProps => ({
    user: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmItem);
