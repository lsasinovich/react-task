import React from 'react';
import ReactDOM from 'react-dom';

import './film-item.scss';

export class FilmItem extends React.Component {
    render() {
        return (
            <div className="item">
                <img src={"http://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg"} />
                <div className="film-info">
                    <div>
                        <p className="title">{this.props.title}</p>
                        <p className="genre">{this.props.genre}</p>
                    </div>
                    <p className="year">{this.props.year}</p>
                </div>
            </div>
        );
    }
};