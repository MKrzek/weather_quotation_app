import React, { Component } from 'react';

import MyLocation from './MyLocation.js';
import Weather from './Weather.js';
import Quote from './Quote.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyLocation/>
        <Weather />
        <Quote/>
      </div>
    );
  }
}

export default App;
