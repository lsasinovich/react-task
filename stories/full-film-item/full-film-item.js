import React from 'react';

import './full-film-item.scss';

export function FullFilmItem(newUser) {
    const user = newUser.user;

    if (user.fullItem.filmData) {
        return (
            <div>
                <button className="btn return-button cl-red bg-white">SEARCH</button>
                <div className="full-film-item">
                    <img src={require('./iron.jpg')} />
                    <div className="full-film-info">
                        <div className="title-and-rating">
                            <p className="title">{user.fullItem.filmData.title}</p>
                            {!!user.fullItem.filmData.vote_average &&
                                <p className="rating">{user.fullItem.filmData.vote_average}</p>
                            }
                        </div>
                        <p>{user.fullItem.filmData.tagline}</p>
                        <p className="year-and-time">
                            <span className="year">{user.fullItem.filmData.release_date.slice(0, 4)}</span>
                            {user.fullItem.filmData.runtime &&
                                <span>{user.fullItem.filmData.runtime} min</span>
                            }
                        </p>
                        <p className="description">{user.fullItem.filmData.overview}</p>
                    </div>
                </div>
            </div>
        );
    } return null;
}

