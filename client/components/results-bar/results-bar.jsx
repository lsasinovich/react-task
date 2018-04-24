import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './results-bar.scss';

export class ResultsBar extends React.Component {
    render() {
        return (
            <div className="results-bar">
                <p className="results-count">{this.props.count} movies found</p>
                <div className="results-sort">
                    <p>Sort by</p>
                    <p>release date</p>
                    <p className="rating">rating</p>
                </div>
            </div>
        );
    }
};

ResultsBar.propTypes = {
    count: PropTypes.number
};
  
ResultsBar.defaultProps = {
    count: -1
};