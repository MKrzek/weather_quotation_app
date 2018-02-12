import {QUOTE} from '../constants.js';
export default function (state=[], action){
    console.log ('quote', action.payload)
    switch(action.type){
        case QUOTE:
         return action.payload;

         default:
         return state;
    }
}