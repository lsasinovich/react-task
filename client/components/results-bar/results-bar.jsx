import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './results-bar.scss';
import { ACTIONS } from '../../constants/app-constants';

class ResultsBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="results-bar">
                <p className="results-count">{this.props.user.count} movies found</p>
                <div className="results-sort">
                    <p>Sort by</p>
                    <p className={this.props.user.sort === "releaseDate" ? "cl-red" : "cl-black"} onClick={()=>this.props.switchSort("releaseDate")}>release date</p>
                    <p className={this.props.user.sort === "rating" ? "cl-red" : "cl-black"} onClick={()=>this.props.switchSort("rating")}>rating</p>
                </div>
            </div>
        );
    }
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
                type: ACTIONS.SWITCH_SORT,
                sort: sort,
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsBar);