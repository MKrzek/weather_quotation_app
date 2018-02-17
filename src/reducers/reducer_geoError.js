import { GEO_ERROR } from "../constants.js";

export default function(state = [], action) {
 console.log ('geo reducer', action.payload)
  switch (action.type) {
    case GEO_ERROR:
      return {gError: action.payload}

    default:
      return state;
  }
}
