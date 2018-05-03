import React from 'react';
import PropTypes from 'prop-types';

import './full-film-item.scss';

export const FullFilmItem = (props) => (
    <div className="full-film-item">
        <img src={props.posterUrl} />
        <div className="full-film-info">
            <div className="title-and-rating">
                <p className="title">{props.title}</p>
                <p className="rating">{props.rating}</p>
            </div>
            <p>{props.additional}</p>
            <p className="year-and-time">{props.year}    {props.duration} min</p>
            <p className="description">{props.description}</p>
        </div>
    </div>
);

FullFilmItem.propTypes = {
    title: PropTypes.string,
    posterUrl: PropTypes.string,
    genre: PropTypes.string,
    additional: PropTypes.string,
    year: PropTypes.number,
    rating: PropTypes.number,
    duratin: PropTypes.number,
    description: PropTypes.string,
};

FullFilmItem.defaultProps = {
    title: "Wolf wood",
    posterUrl: "http://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg",
    genre: "horror",
    additional: "Oscar movie",
    year: 1992,
    rating: 4.7,
    duration: 124,
    description: "A film crew is a group of people hired by a film company, employed during the phase, for the purpose of producing a film or motion picture. Crew is distinguished from cast, who are the actors who appear in front of the camera or provide voices for characters in the film."
};