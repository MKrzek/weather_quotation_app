import React from "react";
import Sun from "../components/Sun.js";
import Clouds from'../components/Clouds.js';
import Rain from '../components/Rain.js';
import Snow from '../components/Snow.js';
export default class WeatherDisplay extends React.Component {
  render() {
    const { name, temp} = this.props.weather;
    
   
    return <div className="mb-5">
        <h2 className="weatherName mb-5">{name}</h2>
        <div>
        {this.props.icon === "Clouds" ? <Clouds /> : null} 
        {this.props.icon==='Rain' ? <Rain/> : null} 
        {this.props.icon ==='Snow' ? <Snow/> : null}
        {this.props.icon ==='Sun' ? <Sun/> :null}
        <h3 className="weatherTemp mb-5">{Math.round(temp)}&#8451;</h3>
        </div>
      </div>;
  }
}
