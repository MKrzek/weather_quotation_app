import axios from "axios";

import { WEATHER } from "../constants.js";
import {QUOTE} from "../constants.js";
import {ADD_TO_LOCALSTORAGE} from '../constants.js';
//import {REMOVE_FROM_LOCALSTORAGE} from '../constants.js';


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
    const toBeStored = location;
    console.log("toBeStored id", toBeStored.id);
    const storedLocations = JSON.parse(localStorage.getItem("locations")) || [];
    console.log ('storedLocations', storedLocations.length);
    if(storedLocations.length > 0) {
      console.log ('in the loop')
      for (let i = 0; i < storedLocations.length; i++) {
        console.log (storedLocations.length)
        if (toBeStored.id === storedLocations[i].id) {
          console.log ( 'stored location id', storedLocations[i].id)
          return false;
        }
      }
      const myLocations =[toBeStored, ...storedLocations];
      console.log ('myLocations', myLocations)
      localStorage.setItem("locations", JSON.stringify(myLocations));
    } else {
      const myLocations = [toBeStored];
      console.log ('myLocations', myLocations)
      localStorage.setItem("locations", JSON.stringify(myLocations));
    }
    dispatch({
      type: ADD_TO_LOCALSTORAGE,
    })
    
  }
}

 