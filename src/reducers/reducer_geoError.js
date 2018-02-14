import {GEO_ERROR} from '../constants.js';

export default function (state=[], action){
    const error = true
    switch(action.type){
        case GEO_ERROR:
         return error

         default: 
         return state;
    }
}