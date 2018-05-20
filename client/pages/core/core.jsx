import React from 'react';
import { connect } from "react-redux";
import { Footer } from '../../components/footer/footer';
import { Nextflixroulette } from '../../components/nextflixroulette/nextflixroulette';
import Header from '../../components/header/header';
import ResultsBar from '../../components/results-bar/results-bar';
import ResultsBody from '../../components/results-body/results-body';

import './core.scss';
import '../../mixins.scss';
import { ACTIONS, ITEM_COUNT_PER_PAGE } from '../../constants/app-constants';

class Core extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="core-page">
                <Header fullItem={this.props.user.fullItem}/>
                <ResultsBar />
                <ResultsBody assets={this.props.user.results} />
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state
    };
};

export default connect(mapStateToProps)(Core);