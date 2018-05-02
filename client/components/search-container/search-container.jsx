import React from 'react';
import ReactDOM from 'react-dom';
import { ResultsBar } from '../results-bar/results-bar';
import { ResultsBody } from '../results-body/results-body';
import { Nextflixroulette } from '../nextflixroulette/nextflixroulette';
import { Header } from '../header/header';

import './search-container.scss';

const resultAssets = [
    { title: 'Asset 1' },
    { title: 'Asset 2' },
    { title: 'Asset 3' },
    { title: 'Asset 4' },
    { title: 'Asset 5' },
    { title: 'Asset 6' },
    { title: 'Asset 7' },
    { title: 'Asset 8' },
    { title: 'Asset 9' },
];

export class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //results: [],
            results: resultAssets
        }
    }
    render() {
        return (
            <div className="search-container">
                <Header/>
                <ResultsBar />
                <ResultsBody assets={this.state.results}/>
            </div>
    );
}
};