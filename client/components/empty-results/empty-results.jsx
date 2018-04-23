import React from 'react';
import ReactDOM from 'react-dom';

import './empty-results.scss';

export class EmptyResults extends React.Component {
    render() {
        return (
        <p className="empty-page">No films found</p>
    );
}
};