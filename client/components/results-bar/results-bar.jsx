import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './results-bar.scss';
import { ACTIONS, SORT, ITEM_COUNT_PER_PAGE } from '../../constants/app-constants';
import { switchSortAction } from '../../action-creators';

class ResultsBar extends React.Component {

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
                            <p className={this.props.user.sort === "releaseDate" ? "cl-red" : "cl-black"} onClick={()=>this.props.switchSortAction("releaseDate", "release_date", this.props.user.inputValue, this.props.user.search)}>release date</p>
                            <p className={this.props.user.sort === "rating" ? "cl-red" : "cl-black"} onClick={()=>this.props.switchSortAction("rating", "vote_average", this.props.user.inputValue, this.props.user.search)}>rating</p>
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

const mapDispatchToProps = { switchSortAction };

const mapStateToProps = (state) => {
    return {
        user: state
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsBar);
