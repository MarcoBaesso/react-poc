import * as React from 'react';
import './index.css';

import logo from './logo.svg';
import {FormattedMessage} from 'react-intl';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <FormattedMessage id="pluralized_key" values={{count: 0}} />
        </p>
      </div>
    );
  }
}

export default App;
