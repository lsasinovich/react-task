import React from 'react';

import './empty-results.scss';
// import '../components/results-body/results-body.scss';

export class EmptyResults extends React.Component {
    render() {
        return (
            <div className="results-body">
                <p className="empty-page">No films found</p>
            </div>
        );
    }
}
