import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Pagination from "react-js-pagination";
import { ResultsBar } from '../results-bar/results-bar';
import FilmItem from '../film-item/film-item';
import { EmptyResults } from '../empty-results/empty-results';
import { ResultsBodyErrorBoundary } from '../results-body-error-boundary/results-body-error-boundary';

import './results-body.scss';
import { ACTIONS } from '../../constants/app-constants';

class ResultsBody extends React.Component {
    paginationHandler(event) {
        console.log(event);
        return fetch(`http://react-cdp-api.herokuapp.com/movies?sortBy=${this.props.user.sort}&search=${this.props.user.inputValue}&searchBy=${this.props.user.search}&offset=${(event-1)*12}&limit=12`)
            .then(response => response.json())
            .then(json => this.props.paginationHandler(event, json))
    }

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
            <div>
                <div className="results-body">
                    { children }               
                
                </div>
                { !!assets.data.length &&
                <div className="pagination-container">
                    <Pagination 
                        activePage={this.props.user.pagination.activePage}
                        itemsCountPerPage={12}
                        totalItemsCount={this.props.user.count}
                        pageRangeDisplayed={5}
                        onChange={(event)=>this.paginationHandler(event)}
                    /> 
                </div>
                }
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


const mapDispatchToProps = (dispatch) => {
    return {
        paginationHandler: (activePage, data) => {
            dispatch({
                type: ACTIONS.PAGINATION_HANDLER,
                activePage: activePage,
                results: data
            })
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ResultsBody);