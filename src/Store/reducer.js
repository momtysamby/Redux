const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        //distributing old state, overwriting the counter, not touching results. IMMUTABLY
        case 'INCREMENT': return {...state, counter: state.counter + 1} 
        case 'DECREMENT': return {...state, counter: state.counter - 1}
        case 'ADD': return {...state, counter: state.counter + action.val}
        case 'SUBTRACT': return {...state, counter: state.counter - action.val}
        //concat = push(), but concat does't manipulate original value. Returns new array = old array + the value
        case 'STORE_RESULT': return {...state, results: state.results.concat({id: new Date(), value: state.counter})}
        case 'DELETE_RESULT': 
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