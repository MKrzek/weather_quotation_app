import React, { Component } from "react";
import {connect} from 'react-redux';

import MyLocation from "./MyLocation.js";
import Weather from "./Weather.js";
import Quote from "./Quote.js";
import SearchBar from "./SearchBar.js";
import Calendar from "../components/Calendar.js";
import _ from 'lodash';

class App extends Component {
  
  changeBackgroundColor=()=>{
    return  _.map(this.props.weather, data=>{
       return  data.temp
    })
  }

   render() {
   const temp = this.changeBackgroundColor();
   console.log ('temp', temp[0])
   let color;
   if (temp[0]<18){
     color='coldColor'
   }else{
     color='warmColor'
   }
   
   document.body.classList = color ;

    return <div className="text-center">
        
         
          <SearchBar />
          <div className="mainPart">
            <MyLocation />
            <Weather />
            <Calendar />
            <Quote className={temp[0] < 19 ? "coldColor" : "warmColor"} />
          </div>
        </div>
      
  }
}
function mapStateToProps(state){
  
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps, null) (App)
