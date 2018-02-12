import React, { Component } from 'react';

import MyLocation from './MyLocation.js';
import Weather from './Weather.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyLocation/>
        <Weather />
      </div>
    );
  }
}

export default App;
