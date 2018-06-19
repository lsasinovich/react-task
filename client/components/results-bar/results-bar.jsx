// @flow
import React from 'react';
import { connect } from 'react-redux';

import './results-bar.scss';
import { switchSortAsyncAction } from '../../store/action-creators';

import { getSortFromState } from '../../selectors';

type StateProps = {
    user: {
        inputValue: string,
        sort: string,
        search: string,
        resultsCount: number,
        fullItem: {
            isActive: boolean,
            filmData: {
                genres: any
            },
        }
    },
    sort: string,
};

type DispatchProps = {
    switchSortAsyncAction: Function,
}

type Props = StateProps & DispatchProps;

class ResultsBar extends React.Component<Props> {
    render() {
        return (
            <div className="results-bar">
                {!!this.props.user.resultsCount &&
                    <div>
                        {!this.props.user.fullItem.isActive ?
                            <div className="results-bar-content">
                                <p className="results-count">{this.props.user.resultsCount} movies found</p>
                                <div className="results-sort">
                                    <p>Sort by</p>
                                    <p
                                        className={this.props.sort === 'releaseDate' ? 'cl-red' : 'cl-black'}
                                        onClick={() => this.props.switchSortAsyncAction(
                                            getSortFromState('releaseDate'),
                                            this.props.user.inputValue,
                                            this.props.user.search,
                                        )
                                        }
                                    >release date
                                    </p>
                                    <p className={this.props.sort === 'rating' ? 'cl-red' : 'cl-black'}
                                        onClick={() => this.props.switchSortAsyncAction(
                                            getSortFromState('rating'),
                                            this.props.user.inputValue,
                                            this.props.user.search,
                                        )
                                        }>
                                        rating
                                    </p>
                                </div>
                            </div> :
                            <p>Films by {this.props.user.fullItem.filmData.genres[0]} genre</p>
                        }
                    </div>
                }
            </div>
        );
    }
}

const mapDispatchToProps = {
    switchSortAsyncAction,
};

const mapStateToProps = (state): StateProps => ({
    user: state,
    sort: getSortFromState(state.sort),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsBar);
