import React from 'react';
import { connect } from 'react-redux';

import { setEmptyResults, returnToMainPage } from '../../action-creators';
import './empty-results.scss';

class EmptyResults extends React.Component {
    componentWillMount() {
        this.props.setEmptyResults();
    }

    render() {
        return (
            <p className="empty-page">No films found</p>
        );
    }
} 

const mapDispatchToProps = {
    setEmptyResults
}

const mapStateToProps = (state) => {
    return {
        user: state
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmptyResults);