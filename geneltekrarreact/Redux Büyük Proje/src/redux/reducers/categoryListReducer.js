import * as actionType from "../actions/actionsType"
import initialState from "./initialState"
export default function changeCategoryReducer(state=initialState.categories,action){
    switch (action.type) {
        case actionType.GET_CATEGORİES_SUCCESS:
            return action.payload
    
        default:
            return state;
    }
}