import React from 'react';

import './results-bar.scss';

export function ResultsBar(newUser) {
    const user = { ...newUser.user };
    return (
        <div className="results-bar">
            {!!user.resultsCount &&
                <div>
                    {!user.fullItem.isActive ?
                        <div className="results-bar-content">
                            <p className="results-count">{user.resultsCount} movies found</p>
                            <div className="results-sort">
                                <p>Sort by</p>
                                <p className={user.sort === 'releaseDate' ? 'cl-red' : 'cl-black'}>release date</p>
                                <p className={user.sort === 'rating' ? 'cl-red' : 'cl-black'}>rating</p>
                            </div>
                        </div> :
                        <p>Films by {user.fullItem.filmData.genres[0]} genre</p>
                    }
                </div>
            }
        </div>
    );
}
