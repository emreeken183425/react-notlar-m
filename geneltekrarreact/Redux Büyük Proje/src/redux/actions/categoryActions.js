import * as actionsTypes from "./actionsType"

export function cahangeCategory(category){
    return{type:actionsTypes.CHANGE_CATEGORY,payload:category }
}

export function getCategoriesSuccess(categories){
    return{type:actionsTypes.GET_CATEGORİES_SUCCESS,payload:categories}
}

export function getCategories(){
    return function (dispatch){
        debugger;
        let url="https://jsonplaceholder.typicode.com/users"
        return fetch(url)
        .then(response=>response.json())
        .then(result=>dispatch(getCategoriesSuccess(result)))
    }
}