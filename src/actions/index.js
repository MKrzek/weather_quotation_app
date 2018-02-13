import axios from "axios";

import { WEATHER } from "../constants.js";
import {QUOTE} from "../constants.js";
import {ADD_TO_LOCALSTORAGE} from '../constants.js';
import {REMOVE_FROM_LOCALSTORAGE} from '../constants.js';


export function showMyLocation() {
  const myLocationURL = "http://ip-api.com/json";
  return dispatch => {
    axios
      .get(myLocationURL)
      .then(response => {
        let location = response.data.city;
        dispatch(showWeather(location));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function showWeather(location) {
  const API_KEY = "0d97dafb64ebaf36cf169cd4e5f02e5a";
  return dispatch => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${API_KEY}`
      )
      .then(response => {
        console.log(response);
        dispatch({ 
                type: WEATHER, 
                payload: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
export function fetchQuote(){
  return dispatch=>{
    axios.get("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1")
    .then(response=>{
      dispatch({
        type:QUOTE,
        payload: response.data[0]
      })
    })
    .catch(error=>{
      console.log (error);
    });
  }
}
export function addToLocalStorage(location){
  return dispatch=>{
    
  }
}

//  event.preventDefault();
//     const beers = JSON.parse(localStorage.getItem('myFavBeers'))||[];
    
//     if (beers.length>0){
//       for (let i=0; i<beers.length;i++){   
//              if (this.props.beer.id===beers[i].id){ 
//                  return false
//              }};
//          const myFavBeers = [this.props.beer, ...beers];
//          localStorage.setItem('myFavBeers', JSON.stringify(myFavBeers))        
//     };  
//     if (beers.length===0){  
//            const myFavBeers = [this.props.beer]
//                 localStorage.setItem('myFavBeers', JSON.stringify(myFavBeers))

// };