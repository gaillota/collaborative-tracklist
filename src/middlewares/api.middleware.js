/* eslint-disable max-len */
// import NProgress from 'nprogress'
import { request } from '../utils/fake-request'

// String key that carries API call info interpreted by this Redux middleware.
export const API_CALL = '@@redux-api-middleware/API_CALL'

function isValidApiCallAction(action) {
    // Quick validation, might need additional work... Oh well !
    return action.type === API_CALL
}

/**
 * Normalize action (eg. a String or Symbol has been dispatched, transform to object with *type* key)
 *
 * @param action
 * @return {*}
 */
function normalizeAction(action) {
    if (typeof action === 'string' || typeof action === 'symbol') {
        return {
            type: action,
        }
    }
    
    return action
}

/**
 * Normalize action types (request, success, error) by assembling required keys, default payload generator, etc.
 * @param types
 * @return {*}
 */
function normalizeActionTypes(types) {
    if (!Array.isArray(types)) {
        throw new Error('You need to pass an array of three action types to be normalized')
    }
    
    // Define default payload function if not provided
    const defaultSuccessPayload = (action, state, response) => response.data
    const defaultErrorPayload = (action, state, error) => error.response
    // Extract 3 action types
    let [requestAction, successAction, errorAction] = types
    
    // Normalize actions
    requestAction = normalizeAction(requestAction)
    successAction = {
        payload: defaultSuccessPayload,
        ...normalizeAction(successAction),
    }
    errorAction = {
        payload: defaultErrorPayload,
        ...normalizeAction(errorAction),
    }
    
    return [requestAction, successAction, errorAction]
}

/**
 * Middleware handling API calls
 *
 * @param dispatch
 * @param getState
 * @return {function(*): function(*=)}
 */
export default ({ dispatch, getState }) => next => async (action) => {
    if (!isValidApiCallAction(action)) {
        return next(action)
    }
    
    const {
        // Required stuff
        endpoint,
        types,
        
        // Optional stuff
        method = 'get',
        body: data,
        headers,
        options,
        credentials,
        baseUrl,
        params,
        responseType = 'json',
        ...extra
    } = action.payload
    const [requestType, successType, errorType] = normalizeActionTypes(types)
    const state = getState()
    let response
    
    dispatch(requestType)
    
    try {
        response = await request({
            endpoint,
            method,
            baseUrl,
            headers,
            params,
            data,
            options,
            credentials,
            responseType,
            ...extra
        })
    } catch (error) {
        return dispatch({
            ...errorType,
            payload: errorType.payload(state, action, error),
        })
    }
    
    dispatch({
        ...successType,
        payload: successType.payload(state, action, response),
    })
}
