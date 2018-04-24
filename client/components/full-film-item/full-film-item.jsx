import React from 'react';
import ReactDOM from 'react-dom';

import './full-film-item.scss';
import { Button } from '../button/button';

export class FullFilmItem extends React.Component {
    render() {
        return (
            <div className="full-film-item">
                <img src={"http://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg"} />
                <div className="full-film-info">
                    <div className="title-and-rating">
                        <p className="title">{this.props.title}</p>
                        <p className="rating">{this.props.rating}</p>
                    </div>
                    <p>{this.props.additional}</p>
                    <p className="year-and-time">{this.props.year}    {this.props.duration} min</p>
                    <p className="description">{this.props.description}</p>
                    <Button class="btn genre-button cl-white bg-red">SEARCH</Button>
                </div>
            </div>
        );
    }
};