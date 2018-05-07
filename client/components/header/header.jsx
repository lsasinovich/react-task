import React from 'react';
import { Nextflixroulette } from '../nextflixroulette/nextflixroulette';
import { FullFilmItem } from '../full-film-item/full-film-item';

import './header.scss';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputValue: "", fullItem: this.props.fullItem};
    }

    updateInputValue = () => {
        this.setState({
          inputValue: evt.target.value,
          fullItem: this.state.fullItem
        });
    }

    resetInputValue = () => {
        this.setState({
            inputValue: "",
            fullItem: this.state.fullItem
        });
    }

    searchHendler = () => {
        console.log(this.state.inputValue);
    }

    titleHendler = () => {
        console.log("Title button was clicked");
    }

    genreHendler = () => {
        console.log("Genre button was clicked");
    }

    returnToMainPage = () => {
        this.setState({
            inputValue: this.state.inputValue,
            fullItem: !this.state.fullItem
        });
    }

    render() {
        return (
            <div className="header">
            <div className="return-div">
                <Nextflixroulette/>
                { this.state.fullItem && 
                    <button className="btn return-button cl-red bg-white" onClick={this.returnToMainPage}>SEARCH</button> 
                }
            </div>
            { !this.state.fullItem ?
                <div>
                <p className="find-movie">FIND YOUR MOVIE</p>
                <div className="search-wrapper">
                    <input className="search-bar" 
                           placeholder="Let's find your movie" 
                           value={this.state.inputValue} 
                           onChange={this.updateInputValue}
                           onClick={this.resetInputValue}>
                    </input>
                    <img src={require('../../images/arrow.png')} />
                </div>
                <div className="button-group cl-white">
                    <div>
                        <p className="search-by">SEARCH BY</p>
                        <button className='btn genre-button bg-grey cl-white' onClick={this.genreHendler}>GENRE</button>
                        <button className='btn title-button bg-red cl-white' onClick={this.titleHendler}>TITLE</button>
                    </div>
                    <button className='btn search-button bg-red cl-white' onClick={this.searchHendler}>SEARCH</button>
                </div>
                </div> :
                <FullFilmItem />
            }
            </div>
        );
    }
}