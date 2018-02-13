import { DISPLAY_LOCALSTORAGE_DATA } from "../constants.js";
export default function (state=[], action){
    console.log("localstorage display", action.payload);
    switch (action.type) {

      case DISPLAY_LOCALSTORAGE_DATA:
        return action.payload;

      default:
        return state;
    }
}