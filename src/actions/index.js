import axios from "axios";

import { WEATHER } from "../constants.js";
import {QUOTE} from "../constants.js";

const myLocationURL = "http://ip-api.com/json";
const API_KEY = "0d97dafb64ebaf36cf169cd4e5f02e5a";

export function showMyLocation() {
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
  console.log ('dziala')
  return dispatch=>{
    axios.get("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1")
    .then(response=>{
      console.log(response);
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
