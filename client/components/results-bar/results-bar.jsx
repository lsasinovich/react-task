import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './results-bar.scss';

export class ResultsBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: 'active',
            releaseDate: 'passive'
        };
    }

    switchSort (event) {
        if(event.target.className === 'passive') {
            if(this.state.rating === 'active') {
                this.setState({
                    rating: 'passive',
                    releaseDate: 'active'
                });
            } else {
                this.setState({
                    rating: 'active',
                    releaseDate: 'passive'
                });
            }
        }
    }

    render() {
        return(
            <div className="results-bar">
                <p className="results-count">{this.props.count} movies found</p>
                <div className="results-sort">
                    <p>Sort by</p>
                    <p className={this.state.releaseDate} onClick={(event) => this.switchSort(event)}>release date</p>
                    <p className={this.state.rating} onClick={(event) => this.switchSort(event)}>rating</p>
                </div>
            </div>
        );
    }
};

ResultsBar.propTypes = {
    count: PropTypes.number
};
  
ResultsBar.defaultProps = {
    count: 0
};