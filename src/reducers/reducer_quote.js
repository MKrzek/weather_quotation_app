import {QUOTE} from '../constants.js';
export default function (state=[], action){
    
    switch(action.type){
        case QUOTE:
         return action.payload;

         default:
         return state;
    }
}