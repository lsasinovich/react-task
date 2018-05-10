import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './results-bar.scss';

class ResultsBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="results-bar">
                <p className="results-count">{this.props.count} movies found</p>
                <div className="results-sort">
                    <p>Sort by</p>
                    <p className={this.props.user.sort === "releaseDate" ? "cl-red" : "cl-black"} onClick={this.props.switchSort.bind(this, "releaseDate")}>release date</p>
                    <p className={this.props.user.sort === "rating" ? "cl-red" : "cl-black"} onClick={this.props.switchSort.bind(this, "rating")}>rating</p>
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



const mapStateToProps = (state) => {
    return {
        user: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        switchSort: (sort) => {
            dispatch({
                type: 'SWITCH_SORT',
                sort: sort,
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsBar);