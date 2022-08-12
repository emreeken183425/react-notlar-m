import * as actionsTypes from "./actionsType"
export function cahangeCategory(category){
    return{type:actionsTypes.CHANGE_CATEGORY,payload:category }
}