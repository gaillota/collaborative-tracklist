import { combineReducers } from 'redux-immutable'

import tracksReducer from './modules/tracks/reducers'

export default function createReducer() {
    return combineReducers({
        tracks: tracksReducer
    })
}
