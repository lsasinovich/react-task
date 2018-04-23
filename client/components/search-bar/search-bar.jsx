import React from 'react';
import ReactDOM from 'react-dom';

import './search-bar.scss';

export class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-wrapper">
                <input className="search-bar" placeholder="Let's find your movie"></input>
                <img src={require('../../images/arrow.png')} />
            </div>
    );
}
};