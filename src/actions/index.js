import axios from "axios";

import { WEATHER } from "../constants.js";
import { QUOTE } from "../constants.js";

import { DISPLAY_LOCALSTORAGE_DATA } from "../constants.js";

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
        console.log("response", response.data);
        dispatch({
          type: WEATHER,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
export function fetchQuote() {
  return dispatch => {
    axios
      .get(
        "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"
      )
      .then(response => {
        dispatch({
          type: QUOTE,
          payload: response.data[0]
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
export function addToLocalStorage(location) {
  return dispatch => {
    const toBeStored = location;
    const storedLocations = JSON.parse(localStorage.getItem("locations")) || [];

    if (storedLocations.length > 0) {
      for (let i = 0; i < storedLocations.length; i++) {
        if (
          toBeStored.id === storedLocations[i].id ||
          toBeStored.name === storedLocations[i].name
        ){return false }
      }
      const myLocations = [toBeStored, ...storedLocations];
      localStorage.setItem("locations", JSON.stringify(myLocations));
    } else {
      const myLocations = [toBeStored];
      localStorage.setItem("locations", JSON.stringify(myLocations));
    }
    dispatch(fetchStoredLocations());
  };
}

export function fetchStoredLocations() {
  let storedLocations;
  return dispatch => {
    storedLocations = JSON.parse(localStorage.getItem("locations")) || [];
    dispatch({
      type: DISPLAY_LOCALSTORAGE_DATA,
      payload: storedLocations
    });
  };
}

export function removeStoredLocation(id) {
  return dispatch => {
    const storedLocations = JSON.parse(localStorage.getItem("locations"));
    const savedLocations = storedLocations.filter(item => item.id !== id);
    localStorage.setItem("locations", JSON.stringify(savedLocations));
    dispatch(fetchStoredLocations());
  };
}
