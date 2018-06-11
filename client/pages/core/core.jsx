// @flow
import 'babel-polyfill';
import 'isomorphic-fetch';

import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch, Redirect, browserHistory } from 'react-router';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';

import { Footer } from '../../components/footer/footer';
import { Nextflixroulette } from '../../components/nextflixroulette/nextflixroulette';
import { NotFoundPage } from '../../components/not-found-page/not-found-page';
import Header from '../../components/header/header';
import ResultsBar from '../../components/results-bar/results-bar';
import EmptyResults from '../../components/empty-results/empty-results';
import FullFilmItem from '../../components/full-film-item/full-film-item';
import { Loading } from '../../components/loading/loading';

const ResultsBody = Loadable({
    loader: () => import ('../../components/results-body/results-body'),
    loading: Loading,
    modules: ['myNamedChunk']
});

import './core.scss';
import '../../mixins.scss';
import { ACTIONS, ITEM_COUNT_PER_PAGE } from '../../constants/app-constants';
import { setEmptyResults, returnToMainPage } from '../../store/action-creators';

type OwnProps = {
    Router: any,
    location: Object,
    context: Object,
    store: Object,
}

type StateProps = {
    user: {
        results: Object
    },
};

type DispatchProps = {
    setEmptyResults: Function,
    returnToMainPage: Function,
}

type Props = StateProps & DispatchProps & OwnProps;

class Core extends React.Component<Props> {
    render() {
        const { Router, location, context, store } = this.props;
        return (
            <Provider store={store}>
                <Router history={browserHistory} context={context} location={location}>
                    <Switch>
                        <Route exact path="/not_found" component={NotFoundPage} />
                        <Route path="/">
                            <div className="core-page">
                                <Switch>
                                    <Route path='/film/:id'>
                                        {!this.props.user.results[0] ?
                                            <Header location={location} history={browserHistory}>
                                                <Route path='/film/:id' component={FullFilmItem} />
                                            </Header> :
                                            null
                                        }
                                    </Route>

                                    <Route path='/search/:inputValue' component={Header} />
                                    <Route path='/' component={Header} />
                                    <Redirect to='/not_found' />
                                </Switch>

                                <ResultsBar />
                                <Switch>
                                    <Route exact path='/' component={EmptyResults} />
                                    <Route path='/film/:id' component={ResultsBody} />
                                    <Route path='/search/:inputValue' component={ResultsBody} />
                                    <Redirect to='/not_found' />
                                </Switch>
                                <Footer />
                            </div>
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}
const mapDispatchToProps = {
    setEmptyResults,
    returnToMainPage
}

const mapStateToProps = (state) : StateProps => {
    return {
        user: state
    };
};

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(Core));