import React, { Component } from "react";
import { connect } from "react-redux";

import MyLocation from "./MyLocation.js";
import Weather from "./Weather.js";
import Quote from "./Quote.js";
import SearchBar from "./SearchBar.js";
import Calendar from "../components/Calendar.js";

import _ from "lodash";

class App extends Component {
  changeBackgroundColor = () => {
    return _.map(this.props.weather, data => {
      return data.temp;
    });
  };

  render() {
    const temp = this.changeBackgroundColor();
    let color;
    if (temp[0] > 19) {
      color = "warColor";
    } else {
      color = "coldColor";
    }
    document.body.classList = color;

    return (
      <div>
        <SearchBar />
        <div className="mainPart">
          <Weather />
          <MyLocation />
          <Calendar />
          <Quote className={temp[0] > 19 ? "warmColor" : "coldColor"} />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("app weather", state.weather);
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps, null)(App);
