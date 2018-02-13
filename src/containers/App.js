import React, { Component } from "react";

import MyLocation from "./MyLocation.js";
import Weather from "./Weather.js";
import Quote from "./Quote.js";
import SearchBar from "./SearchBar.js";
import Calendar from "../components/Calendar.js";

class App extends Component {
  render() {
    return (
      <div className="App text-center">
        <SearchBar />
        <div className='mainPart'>
        <MyLocation />
        <Weather />
        <Calendar />
        <Quote />
        </div>
      </div>
    );
  }
}

export default App;
