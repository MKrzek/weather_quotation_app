import React from "react";
import Sun from "../components/Sun.js";
import Clouds from'../components/Clouds.js';
import Rain from '../components/Rain.js';
import Snow from '../components/Snow.js';
export default class WeatherDisplay extends React.Component {
  render() {
    const { name, temp} = this.props.weather;
    console.log('icon', this.props.icon)
    
   
    return <div className="pb-3">
        <h2 className="weatherName pb-5">{name}</h2>
        
        {this.props.icon === "Clouds" ? <Clouds /> : null} 
        {(this.props.icon==='Drizzle')|| (this.props.icon=='Rain') ? <Rain/> : null} 
        {this.props.icon ==='Snow' ? <Snow/> : null}
        {this.props.icon ==='Sun' ? <Sun/> :null}
        
        <h3 className="weatherTemp pt-3">{Math.round(temp)}&#8451;</h3>
        </div>
      
  }
}
