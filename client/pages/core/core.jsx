import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch, Redirect} from 'react-router';

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
    componentDidMount() {
       if (this.props.location.pathname === '/') {
            this.props.setEmptyResults();
       };
    }

    render() {
        return (
           
                <Switch>
                    <Route exact path="/not_found" component={NotFoundPage} />
                    <Route path="/">
                        <div className="core-page">
                            <Switch>
                                <Route path='/film/:id'>
                                        {!this.props.user.results[0] ? 
                                            <Header><Route path='/film/:id' component={FullFilmItem}/></Header>: 
                                            null
                                        }
                                </Route>

                                <Route path='/search(/:inputValue)' component={Header} />
                                <Route path='/' component={Header} />
                                <Redirect to='/not_found' />
                            </Switch>
                            
                            <ResultsBar />
                            <Switch>
                                <Route exact path='/' component={EmptyResults} />
                                <Route path='/film/:id' component={ResultsBody} />
                                <Route path='/search(/:inputValue)' component={ResultsBody} />
                                <Redirect to='/not_found' />
                            </Switch>
                            <Footer/>
                        </div>
                    </Route>
                </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(Core);