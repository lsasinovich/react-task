import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { ResultsBar } from '../results-bar/results-bar';
import FilmItem from '../film-item/film-item';
import EmptyResults from '../empty-results/empty-results';
import { ResultsBodyErrorBoundary } from '../results-body-error-boundary/results-body-error-boundary';

import './results-body.scss';

class ResultsBody extends React.Component {
    render() {
        const assets = this.props.user.results;
        const children = assets.data[0] ? assets.data.map(asset => (
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
                <div className="results-body">
                    { children }   
                </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        user: state
    };
};

export default connect(mapStateToProps)(ResultsBody);