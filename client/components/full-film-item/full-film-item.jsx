import React from 'react';
import PropTypes from 'prop-types';

import './full-film-item.scss';

function returnToMainPage() {
    console.log('Return to main page');
}

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
            <button className="btn genre-button cl-white bg-red" onClick={returnToMainPage}>SEARCH</button>
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
};

FullFilmItem.defaultProps = {
    title: "Wolf wood",
    posterUrl: "http://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg",
    genre: "horror",
    additional: "Oscar movie",
    year: 1992,
    rating: 4.7,
    duration: 124,
};