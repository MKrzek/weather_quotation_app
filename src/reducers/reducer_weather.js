import { WEATHER } from "../constants.js";

export default function (state=[], action){
    console.log ('weather', action.payload)
    switch(action.type){
        case WEATHER:
        let tempAVG=action.payload.main.temp;
        let name=action.payload.name
        let id=action.payload.sys.id
        console.log ('id', id)
        return [{name: name, temp: tempAVG, id:id}]

        default: 
        return state;
    }
}

