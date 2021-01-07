import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './Store/reducers/counter'
import resultReducer from './Store/reducers/result'

const rootReducer = combineReducers({
    ctr: counterReducer,
    res:resultReducer
})

//Adding Middleware to the project
const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] dispatching', action)
            const result = next(action)
            console.log('[Middleware] next store', store.getState())
            return result
        }
    }
}

const store = createStore(rootReducer, applyMiddleware(logger))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
