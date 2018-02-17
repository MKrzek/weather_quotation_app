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
      
    return <div>
           <div className="weather">{this.displayWeather()}</div>
           <div className='error'>
             {this.props.geoError.length!== 0 ? "Can't geolocate your location" : null}   
             {this.props.fetchError.length!==0 ? "Can't find a required location": null} 
           </div>
           </div>
        
      
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
