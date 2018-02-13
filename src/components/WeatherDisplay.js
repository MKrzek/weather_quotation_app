import React from 'react';
export default class WeatherDisplay extends React.Component{
    render(){
       const {name, temp}=this.props.weather
        
        return  <div>
            <h2>{name}</h2>
            <h3>{temp}&#8451;</h3>
            </div>
}
}