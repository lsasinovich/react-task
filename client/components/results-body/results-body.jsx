import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { ResultsBar } from '../results-bar/results-bar';
import FilmItem from '../film-item/film-item';
import { EmptyResults } from '../empty-results/empty-results';
import { ResultsBodyErrorBoundary } from '../results-body-error-boundary/results-body-error-boundary';

import './results-body.scss';

class ResultsBody extends React.Component {
    render() {
        const assets = this.props.user.results;

        const children = assets.data.length ? assets.data.map(asset => (
            <FilmItem
                key={asset.id}
                id={asset.id}
                title={asset.title}
                posterUrl={asset.poster_path}
                year={Number(asset.release_date.slice(0, 4))}
                genres={asset.genres.join(', ')}
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

const mapStateToProps = (state) => {
    return {
        user: state
    };
};

export default connect(mapStateToProps)(ResultsBody);