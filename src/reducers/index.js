import { combineReducers } from "redux";

import { reducer as FormReducer } from "redux-form";

import Weather from "./reducer_weather.js";
import Quote from "./reducer_quote.js";
import LocalStorage from "./reducer_localStorage.js";
import GeoError from './reducer_geoError.js';
import FetchError from './reducer_fetchError.js';

const rootReducer = combineReducers({
  form: FormReducer,
  weather: Weather,
  quote: Quote,
  storedLocations: LocalStorage,
  geoError: GeoError,
  fetchError: FetchError
});
export default rootReducer;
