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

import './core.scss';
import '../../mixins.scss';
import { ACTIONS, ITEM_COUNT_PER_PAGE } from '../../constants/app-constants';
import { setEmptyResults, returnToMainPage } from '../../action-creators';

class Core extends React.Component {
    componentWillMount() {
       if (this.props.location.pathname === '/') {
            this.props.setEmptyResults();
       };
    }

    render() {
        return (
            <Router>
                <div className="core-page">
                    <Switch>
                        <Route path='/film/:id'>
                            <Header>
                                <Route path='/film/:id' render={() =>
                                        <Link to='/' onClick={()=>this.props.returnToMainPage()}><button className="btn return-button cl-red bg-white">SEARCH</button></Link>
                                    } />
                                <Route path='/film/:id' component={FullFilmItem}/> 
                            </Header>
                        </Route>
            
                        <Route path='/' component={Header} />
                        <Redirect to='/not_found' />
                    </Switch>
                    
                    <ResultsBar />
                    <Switch>
                        <Route exact path='/' component={EmptyResults} />
                        <Route path='*' component={ResultsBody}  assets={this.props.user.results} />
                    </Switch>
                    <Footer/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Core);