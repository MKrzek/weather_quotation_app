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
  const storedLocations= JSON.parse(localStorage.getItem('locations'))||[];
  if (storedLocations>0){
    for (let i=0; i<storedLocations.length; i++){
      if (location[2]===storedLocations[i].id){
      return false
    }};
    const myLocations = [location[1], ...storedLocations];
    localStorage.setItem('locations', JSON.stringify(myLocations))
  }
  if (storedLocations.length===0){
    const myLocations =[location]
    localStorage.setItem('locations', JSON.stringify(myLocations))
  }
  return dispatch=>{
    dispatch({
      type: ADD_TO_LOCALSTORAGE

    })
    
  }
}

 