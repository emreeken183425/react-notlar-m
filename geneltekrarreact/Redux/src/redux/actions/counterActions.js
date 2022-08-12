import * as actionsTypes from './actionsTypes'

export const increaseCounter=()=>({
    type:actionsTypes.INCREASE_COUNTER,
    payload:1
})
export const decreaseCounter=()=>({
    type:actionsTypes.DECREASE_COUNTER,
    payload:1
})
export const ıncreaseByTwoCounter=()=>({
    type:actionsTypes.INCREASE_BY_TWO_COUNTER,
    payload:2
})