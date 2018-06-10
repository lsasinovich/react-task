import React from 'react';

import { Netflixroulette } from '../netflixroulette/netflixroulette';

import './header.scss';

export function Header(props) {
    const user = props.user;
    console.log(props.hi);
    return (
        <div className="header">
            <div className="return-div">
                <Netflixroulette />
            </div>
            { !user.fullItem.isActive &&
                <div>
                    <p className="find-movie" onClick={() => props.hi()}>FIND YOUR MOVIE</p>
                    <div className="search-wrapper">
                        <input className="search-bar"
                            placeholder="Let's find your movie"
                        />
                        { user.inputValue === '' ?
                            <img className="arrow" src={require('./arrow.png')} /> :
                            <img className="cross" src={require('./cross.png')} />
                        }
                    </div>
                    <div className="button-group cl-white">
                        <div>
                            <p className="search-by">SEARCH BY</p>
                            <button className={`btn genre-button ${user.search === 'genres' ? 'bg-red' : 'bg-grey'} cl-white`}>GENRE</button>
                            <button className={`btn title-button ${user.search === 'title' ? 'bg-red' : 'bg-grey'} cl-white`}>TITLE</button>
                        </div>
                        <button className='btn search-button bg-red cl-white'>SEARCH</button>
                    </div>
                </div>
            }
        </div>
    );
}
