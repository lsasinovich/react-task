import React from 'react';
import { Footer } from '../../components/footer/footer';
import { ResultsBar } from '../../components/results-bar/results-bar';
import { ResultsBody } from '../../components/results-body/results-body';
import { Nextflixroulette } from '../../components/nextflixroulette/nextflixroulette';
import { Header } from '../../components/header/header';

import './core.scss';
import '../../mixins.scss';

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

export class Core extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //results: [],
            results: resultAssets,
            fullItem: false
        }
    }

    render() {
        return (
            <div className="core-page">
                <Header fullItem={this.state.fullItem}/>
                <ResultsBar />
                <ResultsBody assets={this.state.results} />
                <Footer/>
            </div>
        );
    }
}
