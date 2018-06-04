import React from 'react';
import { connect } from 'react-redux';

import { setEmptyResults, returnToMainPage } from '../../store/action-creators';
import './empty-results.scss';

class EmptyResults extends React.Component {
    componentDidMount() {
        this.props.setEmptyResults();
    }

    render() {
        return (
            <div>
            <p className="empty-page">No films found</p>
            </div>
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