import React from 'react';
import { Nextflixroulette } from '../nextflixroulette/nextflixroulette';

import './header.scss';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputValue: ""};
    }

    updateInputValue(evt) {
        this.setState({
          inputValue: evt.target.value
        });
    }

    resetInputValue(evt) {
        this.setState({
            inputValue: ""
        });
    }

    searchHendler() {
        console.log(this.state.inputValue);
    }

    titleHendler() {
        console.log("Title button was clicked");
    }

    genreHendler() {
        console.log("Genre button was clicked");
    }

    render() {
        return (
            <div className="header">
                <Nextflixroulette/>
                <p className="find-movie">FIND YOUR MOVIE</p>
                <div className="search-wrapper">
                    <input className="search-bar" 
                           placeholder="Let's find your movie" 
                           value={this.state.inputValue} 
                           onChange={this.updateInputValue.bind(this)}
                           onClick={this.resetInputValue.bind(this)}>
                    </input>
                    <img src={require('../../images/arrow.png')} />
                </div>
                <div className="button-group cl-white">
                    <div>
                        <p className="search-by">SEARCH BY</p>
                        <button className='btn genre-button bg-grey' onClick={this.genreHendler.bind(this)}>GENRE</button>
                        <button className='btn title-button bg-red' onClick={this.titleHendler.bind(this)}>TITLE</button>
                    </div>
                    <button className='btn search-button bg-red' onClick={this.searchHendler.bind(this)}>SEARCH</button>
                </div>
            </div>
        );
    }
}