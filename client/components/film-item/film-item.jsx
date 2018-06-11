// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';

import './film-item.scss';
import { fetchMoviesById } from '../../store/action-creators';

import NoPoster from '../../images/noposter.jpg';

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
                <Card>
                    {this.props.posterUrl ?
                        <Link to={`/film/${this.props.id}`} onClick={() => this.props.fetchMoviesById(this.props.id)}>
                            <CardImg top height="100%" src={this.props.posterUrl} alt="Card image cap" />
                        </Link> :
                        <CardImg top height="100%" src={NoPoster} alt="Card image cap" />
                    }
                    <CardBody className="film-info">
                        <Link to={`/film/${this.props.id}`} onClick={() => this.props.fetchMoviesById(this.props.id)}>
                            <CardTitle>{this.props.title}</CardTitle>
                        </Link>
                        <CardSubtitle>{this.props.genres}</CardSubtitle>
                        <CardText>{this.props.year}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchMoviesById,
};

const mapStateToProps = (state): StateProps => ({
    user: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmItem);
