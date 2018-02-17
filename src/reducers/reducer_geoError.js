import { GEO_ERROR } from "../constants.js";

export default function(state = [], action) {
  switch (action.type) {
    case GEO_ERROR:
      return {gError: action.payload}

    default:
      return state;
  }
}
