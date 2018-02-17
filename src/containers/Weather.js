import React from "react";
import { connect } from "react-redux";

import _ from "lodash";
import WeatherDisplay from "../components/WeatherDisplay.js";


class Weather extends React.Component {
  
  displayWeather = () => {
    if (this.props.geoError.length!==0){
      return <h2 className='pb-5 text-danger'>Can't geolocate your location.Try searching manually.</h2>         
    }else if (this.props.fetchError.length!==0){
      return <h2 className='pb-5 text-danger'>Can't find a required location. Try again.</h2>
    }else {
    let icon;
    return _.map(this.props.weather, data => {
      icon = data.weather;
      icon = icon.main
      console.log ('icon', icon)
      return <WeatherDisplay key={data.id} weather={data} icon={icon} />;
    });
  };
}

  render() {  
    return <div className="weather">{this.displayWeather()}</div>
  }
}
function mapStateToProps(state) {
  console.log('error', state.geoError)
  console.log('fetch error', state.fetchError)
  return { weather: state.weather,
           geoError: state.geoError,
           fetchError: state.fetchError};
}
export default connect(mapStateToProps, null)(Weather);
