import { createAction } from 'redux-actions'

import { API_CALL } from '../../middlewares/api.middleware'
import {
    TRACK_TOGGLE_PRIORITY,
    TRACK_TOGGLE_UPVOTE,
    TRACKS_GET_ERROR,
    TRACKS_GET_FETCHING,
    TRACKS_GET_SUCCESS,
} from './constants'

// Sync actions
export const togglePriority = createAction(TRACK_TOGGLE_PRIORITY)
export const toggleUpvote = createAction(TRACK_TOGGLE_UPVOTE)

// Async actions (use redux-thunk)
export const get = () => dispatch => dispatch({
    type: API_CALL,
    payload: {
        endpoint: '/tracks',
        types: [
            TRACKS_GET_FETCHING,
            TRACKS_GET_SUCCESS,
            TRACKS_GET_ERROR
        ],
    },
})
