import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import WeatherDisplay from "../components/WeatherDisplay.js";


class Weather extends React.Component {
  displayWeather = () => {
    let icon;
    return _.map(this.props.weather, data => {
      icon = data.weather;
      icon = icon.main
      console.log ('icon', icon)
      return <WeatherDisplay key={data.id} weather={data} icon={icon} />;
    });
  };



  render() {
   
    if (this.props.weather === "undefined") {
      return <div>Location not found, please check the spelling</div>;
    }
    return <div className="weather">{this.displayWeather()}</div>;
        
      
  }
}
function mapStateToProps(state) {
  return { weather: state.weather };
}
export default connect(mapStateToProps, null)(Weather);
