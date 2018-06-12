// @flow
import 'babel-polyfill';
import 'isomorphic-fetch';

import React from 'react';
import { connect, Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { Switch, Redirect } from 'react-router';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';

import { Footer } from '../../components/footer/footer';
import { NotFoundPage } from '../../components/not-found-page/not-found-page';
import Header from '../../components/header/header';
import ResultsBar from '../../components/results-bar/results-bar';
import EmptyResults from '../../components/empty-results/empty-results';
import FullFilmItem from '../../components/full-film-item/full-film-item';
import { Loading } from '../../components/loading/loading';

import './core.scss';
import '../../mixins.scss';
import { setEmptyResults, returnToMainPage } from '../../store/action-creators';

const ResultsBody = Loadable({
    loader: () => import('../../components/results-body/results-body'),
    loading: Loading,
    modules: ['myNamedChunk'],
});

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
        const {
            Router, location, context, store,
        } = this.props;
        return (
            <Provider store={store}>
                <Router context={context} location={location}>
                    <Switch>
                        <Route exact path="/not_found" component={NotFoundPage} />
                        <Route path="/">
                            <div className="core-page">
                                <Switch>
                                    <Route path='/film/:id'>
                                        {!this.props.user.results[0] ?
                                            <Header location={location}>
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
    returnToMainPage,
};

const mapStateToProps = (state): StateProps => ({
    user: state,
});

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(Core));
