import { FETCHING_ERROR } from "../constants.js";

export default function (state=[], action){
    switch(action.type){
      
        case FETCHING_ERROR:
        return {fError: action.payload}

         default: 
         return state;
    }
}
