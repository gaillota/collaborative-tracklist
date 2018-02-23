import { applyMiddleware, compose, createStore } from 'redux'
import { fromJS } from 'immutable'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import apiMiddleware from '../middlewares/api.middleware'
import createReducer from '../reducers'

export default function configureStore(initialState = {}) {
    const logger = createLogger()
    const rootReducer = createReducer()
    
    const middlewares = [
        // App middlewares
        apiMiddleware,
        
        // Package middlewares
        thunk,
        logger,
    ]
    
    const enhancers = [
        applyMiddleware(...middlewares),
    ]
    
    // use Redux DevTools Chrome extension if available
    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Prevent recomputing reducers for `replaceReducer`
                shouldHotReload: false,
            })
            : compose
    
    const store = createStore(
        rootReducer,
        fromJS(initialState),
        composeEnhancers(...enhancers),
    )
    
    // Extensions
    store.injectedReducers = {}; // Reducer registry
    
    return store
}
