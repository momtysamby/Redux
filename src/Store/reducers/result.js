import * as actionTypes from '../actions'

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT: 

        //value: state.counter doesn't work any more
        return {...state, results: state.results.concat({id: new Date(), value: action.result})}
        case actionTypes.DELETE_RESULT: 
        // One way of removing data from array immutably
        // const id = 2
        // const newArray = [...state.results]
        // newArray.splice(id, 1)

        //Second way
        //Returns true for all elements where id DOESN'T equal to the id we pass (resultElId) in Counter container
        const updatedArray = state.results.filter(result => result.id !== action.resultElId)
        return {...state, results: updatedArray}
    }
    return state
}

export default reducer