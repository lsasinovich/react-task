import React from 'react';
import ReactDOM from 'react-dom';
import { ResultsBar } from '../results-bar/results-bar';
import { FilmItem } from '../film-item/film-item';
import { EmptyResults } from '../empty-results/empty-results';
import { ResultsBodyErrorBoundary } from '../resultsBodyErrorBoundary/resultsBodyErrorBoundary';

import './results-body.scss';

export class ResultsBody extends React.Component {
    render() {
        const assets = this.props.assets;

        const children = assets.length ? assets.map(asset => (
            <FilmItem
                key={asset.title}
                title={asset.title}
                posterUrl={asset.posterUrl}
                year={asset.year}
                genre={asset.genre}
            />
        )) : <EmptyResults />;

        return (
            <ResultsBodyErrorBoundary>
                <div className="results-body">
                    { children }
                </div>
            </ResultsBodyErrorBoundary>
        );
    }
};