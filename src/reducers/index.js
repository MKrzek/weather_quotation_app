import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";


import Weather from './reducer_weather.js';
import Quote from './reducer_quote.js';

const rootReducer = combineReducers({

weather: Weather,
quote: Quote,

}
)
export default rootReducer;