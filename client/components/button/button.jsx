import React from 'react';
import ReactDOM from 'react-dom';

import './button.scss';

export class Button extends React.Component {
    render() {
        return (
        <button className={this.props.class}>{this.props.children}</button>
    );
}
};