import { WEATHER } from "../constants.js";

export default function (state=[], action){
    console.log ('weather', action.payload)
    switch(action.type){
        case WEATHER:
        let tempAVG=action.payload.main.temp;
        let name=action.payload.name
        console.log (tempAVG)
        return [name, tempAVG]

        default: 
        return state;
    }
}

