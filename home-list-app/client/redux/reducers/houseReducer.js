import { CREATE_HOUSES, FETCH_HOUSES } from "../actions/houseAction";

const intialState = {
    houses : []
}

export default function(state = intialState, action){
    switch(action.type){
        // Check to see if the reducer cares about this action
        case FETCH_HOUSES:
            return{
                // If so, make a copy of `state`
                ...state,
                // and update the copy with the new value frompayload
                houses: action.payload
            }
            case CREATE_HOUSES:
                console.log(action.payload)
                return{
                    ...state,
                    houses: houses.concat(action.payload)
                }
    }
    // otherwise return the existing state unchanged
    return state;
}