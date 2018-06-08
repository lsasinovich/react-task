import React from 'react';
import PropTypes from 'prop-types';

import './results-body-error-boundary.scss';

export class ResultsBodyErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error) {
        this.setState({ hasError: true });
        console.error(error);
    }

    render() {
        if (this.state.hasError) {
            return <h1 className="error-boundary">Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

ResultsBodyErrorBoundary.propTypes = {
    children: PropTypes.element.isRequired,
};
