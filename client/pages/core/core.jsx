import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch, Redirect} from 'react-router';
import { hot } from 'react-hot-loader';

import { Footer } from '../../components/footer/footer';
import { Nextflixroulette } from '../../components/nextflixroulette/nextflixroulette';
import Header from '../../components/header/header';
import ResultsBar from '../../components/results-bar/results-bar';
import ResultsBody from '../../components/results-body/results-body';
import EmptyResults from '../../components/empty-results/empty-results';
import FullFilmItem from '../../components/full-film-item/full-film-item';
import { NotFoundPage } from '../../components/not-found-page/not-found-page';

import './core.scss';
import '../../mixins.scss';
import { ACTIONS, ITEM_COUNT_PER_PAGE } from '../../constants/app-constants';
import { setEmptyResults, returnToMainPage } from '../../store/action-creators';

class Core extends React.Component {
    // componentDidMount() {
    //    if (this.props.location.pathname === '/') {
    //         this.props.setEmptyResults();
    //    };
    // }

    render() {
        const { Router, location, context } = this.props;
        return (
            <Router location={location} context={context}>
                <div>
                    <Route path='/footer' component={Footer}/>
                    <p>hi</p>
                </div>
            </Router>
        );
    }
}
const mapDispatchToProps = {
    setEmptyResults,
    returnToMainPage
}

const mapStateToProps = (state) => {
    return {
        user: state
    };
};

export default hot(module)(Core);