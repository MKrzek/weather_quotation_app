import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import MyLocation from './reducer_myLocation.js';

const rootReducer = combineReducers({
myLocation: MyLocation

}
)
export default rootReducer;