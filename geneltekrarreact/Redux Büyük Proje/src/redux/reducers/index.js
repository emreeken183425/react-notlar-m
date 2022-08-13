import {combineReducers } from 'redux'
import changeCategoryReducer from '../reducers/changeCategoryReducer'
import categoryListReducer from "./categoryListReducer"
const rootReducer=combineReducers({
    changeCategoryReducer,
    categoryListReducer
})

export default rootReducer