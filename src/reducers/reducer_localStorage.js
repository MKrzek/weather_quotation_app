import { DISPLAY_LOCALSTORAGE_DATA } from "../constants.js";

export default function(state = [], action) {
  switch (action.type) {
    case DISPLAY_LOCALSTORAGE_DATA:
      return action.payload;

    default:
      return state;
  }
}
