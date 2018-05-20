import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './results-bar.scss';
import { ACTIONS, SORT, ITEM_COUNT_PER_PAGE } from '../../constants/app-constants';

class ResultsBar extends React.Component {
    switchSort(sort) {
        if(sort !== this.props.user.sort) {
            return fetch(`http://react-cdp-api.herokuapp.com/movies?sortBy=${SORT[sort]}&sortOrder=desc&search=${this.props.user.inputValue}&searchBy=${this.props.user.search}&limit=${ITEM_COUNT_PER_PAGE}`)
            .then(response => response.json())
            .then(json => this.props.switchSort(sort, json))
        }
    }

    render() {
        return(
            <div className="results-bar">
            { !!this.props.user.resultsCount ? 
                <div>
                { !this.props.user.fullItem.isActive ? 
                    <div className="results-bar-content">
                        <p className="results-count">{this.props.user.resultsCount} movies found</p>
                        <div className="results-sort">
                            <p>Sort by</p>
                            <p className={this.props.user.sort === "releaseDate" ? "cl-red" : "cl-black"} onClick={()=>this.switchSort("releaseDate")}>release date</p>
                            <p className={this.props.user.sort === "rating" ? "cl-red" : "cl-black"} onClick={()=>this.switchSort("rating")}>rating</p>
                        </div>
                    </div> :
                    <div>
                        { !!this.props.user.inputValue ? 
                            <p>Films by {this.props.user.searchInfo.value} {this.props.user.searchInfo.search}</p>
                            : null
                        }
                    </div>
                }
                </div> : null
            }
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        user: state
    };
};

const mapDispatchToProps = (dispatch, results) => {
    return {
        switchSort: (sort, results) => {
            console.log(ACTIONS.SWITCH_SORT);
            dispatch({
                type: ACTIONS.SWITCH_SORT,
                sort: sort,
                results: results
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsBar);