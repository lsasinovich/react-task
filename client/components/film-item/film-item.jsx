import React from 'react';
import PropTypes from 'prop-types';

import './film-item.scss';

export const FilmItem = (props) => (
    <div className="film-item">
        <img src={props.posterUrl} />
        <div className="film-info">
            <div>
                <p className="title">{props.title}</p>
                <p className="genre">{props.genre}</p>
            </div>
            <p className="year">{props.year}</p>
        </div>
    </div>
)

FilmItem.propTypes = {
    title: PropTypes.string,
    posterUrl: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
};

FilmItem.defaultProps = {
    title: "Wolf wood",
    posterUrl: "http://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg",
    genre: "horror",
    year: 1992,
};