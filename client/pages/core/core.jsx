import React from 'react';
import { connect } from "react-redux";
import { Footer } from '../../components/footer/footer';
import { ResultsBar } from '../../components/results-bar/results-bar';
import { ResultsBody } from '../../components/results-body/results-body';
import { Nextflixroulette } from '../../components/nextflixroulette/nextflixroulette';
import { Header } from '../../components/header/header';

import './core.scss';
import '../../mixins.scss';

class Core extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div className="core-page">
            <button onClick={this.props.setFullItem}>Hello</button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        setFullItem: (fullItem) => {
            dispatch({
                type: 'ADD'
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Core);