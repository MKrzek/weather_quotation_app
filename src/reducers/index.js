import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as FormReducer } from "redux-form";

import Weather from './reducer_weather.js';
import Quote from './reducer_quote.js';

const rootReducer = combineReducers({
form: FormReducer,
weather: Weather,
quote: Quote,

}
)
export default rootReducer;