import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import WeatherDisplay from '../components/WeatherDisplay.js';

class Weather extends React.Component{

    displayWeather=()=>{
       return _.map(this.props.weather, data=>{
          return  <WeatherDisplay key={data.id} weather={data}/>
       })
    }

    render(){
        if (this.props.weather ==='undefined'){
            return <div>Location not found, please check the spelling</div>
        };
        return  <div>
                 {this.displayWeather()}
                 </div>

    }
}
function mapStateToProps(state){
    
    return { weather: state.weather };
};
export default connect(mapStateToProps, null)(Weather);

 