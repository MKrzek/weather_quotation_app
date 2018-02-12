import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";


import Weather from './reducer_weather.js';


const rootReducer = combineReducers({

weather: Weather,

}
)
export default rootReducer;