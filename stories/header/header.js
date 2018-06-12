import React from 'react';

import { Netflixroulette } from '../netflixroulette/netflixroulette';

import './header.scss';
import { Arrow } from './arrow.png';
import { Cross } from './cross.png';

export function Header(props) {
    const user = props.user;
    return (
        <div className="header">
            <div className="return-div">
                <Netflixroulette />
            </div>
            {!user.fullItem.isActive &&
                <div>
                    <p className="find-movie">FIND YOUR MOVIE</p>
                    <div className="search-wrapper">
                        <input className="search-bar"
                            placeholder="Let's find your movie"
                        />
                        {user.inputValue === '' ?
                            <img className="arrow" src={Arrow} /> :
                            <img className="cross" src={Cross} />
                        }
                    </div>
                    <div className="button-group cl-white">
                        <div>
                            <p className="search-by">SEARCH BY</p>
                            <button
                                className={`btn genre-button ${user.search === 'genres' ? 'bg-red' : 'bg-grey'} cl-white`}
                            >
                                GENRE
                            </button>
                            <button
                                className={`btn title-button ${user.search === 'title' ? 'bg-red' : 'bg-grey'} cl-white`}
                            >TITLE
                            </button>
                        </div>
                        <button className='btn search-button bg-red cl-white'>SEARCH</button>
                    </div>
                </div>
            }
        </div>
    );
}
