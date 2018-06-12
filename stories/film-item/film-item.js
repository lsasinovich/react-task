import React from 'react';

import './film-item.scss';
import NoPoster from './noposter.jpg';
import Iron from './iron.jpg';

export function FilmItem(newUser) {
    const user = newUser.user;

    return (
        <div className="film-item">
            {user.posterUrl ?
                <img src={Iron} /> :
                <img src={NoPoster} />
            }
            <div className="film-info">
                <div>
                    <p className="title">{user.title}</p>
                    <p className="genre">{user.genres}</p>
                </div>
                <p className="year">{user.year}</p>
            </div>
        </div>
    );
}
