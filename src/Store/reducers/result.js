import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId)
    return updateObject(state, {...state, results: updatedArray})
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT: 
        return updateObject(state, 
            {...state, results: state.results.concat({id: new Date(), value: action.result})})

        case actionTypes.DELETE_RESULT: 
        // One way of removing data from array immutably
        // const id = 2
        // const newArray = [...state.results]
        // newArray.splice(id, 1)

        //Second way
        //Returns true for all elements where id DOESN'T equal to the id we pass (resultElId) in Counter container
        
        // implemented in deleteResult finction
        // const updatedArray = state.results.filter(result => result.id !== action.resultElId)
        // return updateObject(state, {...state, results: updatedArray})
        return deleteResult(state, action)
    }
    return state
}

export default reducer