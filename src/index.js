import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import counterReducer from './Store/reducers/counter'
import resultReducer from './Store/reducers/result'
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'


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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
