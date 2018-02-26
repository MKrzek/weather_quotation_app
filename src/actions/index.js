import axios from "axios";
import swal from "sweetalert";
import { WEATHER } from "../constants.js";
import { QUOTE } from "../constants.js";
import { DISPLAY_LOCALSTORAGE_DATA } from "../constants.js";
import { GEO_ERROR } from "../constants.js";
import { FETCHING_ERROR } from "../constants.js";

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
        dispatch(handleGeoError());
      });
  };
}
export function handleGeoError() {
  const geoError= 'geoError'
  return dispatch => {
    dispatch({
      type: GEO_ERROR,
      payload: geoError
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
        dispatch({
          type: WEATHER,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch(handleFetchError());
      });
  };
}
export function handleFetchError() {
  const fetchingError='fetchingError'
  return dispatch => {
    dispatch({
      type: FETCHING_ERROR,
      payload: fetchingError
    });
  };
}

export function fetchQuote() {
  return dispatch => {
    axios
      .get(
        "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"
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
  const toBeStored = location;
  const storedLocations = JSON.parse(localStorage.getItem("locations")) || [];
  return dispatch => {
    if (storedLocations.length > 0) {
      for (let i = 0; i < storedLocations.length; i++) {
        if (
          toBeStored.id === storedLocations[i].id ||
          toBeStored.name === storedLocations[i].name
        ) {
          swal("This location has been saved previously");
          return false;
        }
      }
      const myLocations = [toBeStored, ...storedLocations];
      localStorage.setItem("locations", JSON.stringify(myLocations));
      swal("Your location has been saved");
    }
    if (storedLocations.length === 0) {
      const myLocations = [toBeStored];
      localStorage.setItem("locations", JSON.stringify(myLocations));
      swal("Your location has been saved");
    }
    dispatch(fetchStoredLocations());
  };
}

export function fetchStoredLocations() {
  const storedLocations = JSON.parse(localStorage.getItem("locations")) || [];
  return dispatch => {
    dispatch({
      type: DISPLAY_LOCALSTORAGE_DATA,
      payload: storedLocations
    });
  };
}

export function removeStoredLocation(id) {
  const storedLocations = JSON.parse(localStorage.getItem("locations"));
  const savedLocations = storedLocations.filter(item => item.id !== id);
  return dispatch => {
    localStorage.setItem("locations", JSON.stringify(savedLocations));
    dispatch(fetchStoredLocations());
  };
}
