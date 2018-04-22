import React from 'react';
import { Danger } from '../about/about.jsx';

import './home.scss';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello jKitty!</h1>
        <Danger/>
      </div>
    );
  }
}