import * as actionTypes from './actionTypes'

// export const storeResult = (res) => { return {type: STORE_RESULT, result: res}}
export const saveResult = (res) => { 
    // const updatedResult = res * 2 - any logic can go here, but better in REDUCER
    return {
        type: actionTypes.STORE_RESULT, result: res
    }
}
export const storeResult = (res) => { 
    //Making this an asynchronous code
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter
            console.log(oldCounter)
            dispatch(saveResult(res))
        }, 2000)
    }
}
export const deleteResult = (resElId) => { return {type: actionTypes.DELETE_RESULT, resultElId: resElId}}
