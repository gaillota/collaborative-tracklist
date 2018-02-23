import { fromJS } from 'immutable'
import {
    TRACK_TOGGLE_PRIORITY,
    TRACK_TOGGLE_UPVOTE,
    TRACKS_GET_ERROR,
    TRACKS_GET_FETCHING,
    TRACKS_GET_SUCCESS,
} from './constants'

const initialTracklistState = fromJS({
    loading: false,
    data: [],
    error: null,
})

function tracksReducer(state = initialTracklistState, action) {
    switch (action.type) {
        case TRACKS_GET_FETCHING:
            return state
                .set('loading', true)
        case TRACKS_GET_SUCCESS:
            return state
                .set('loading', false)
                .set('data', fromJS(action.payload))
        case TRACKS_GET_ERROR:
            return state
                .set('loading', false)
                .set('error', action.payload)
        case TRACK_TOGGLE_UPVOTE:
            return state
                .update('data', tracks => tracks.map((track) => {
                    if (track.get('id') === action.payload) {
                        return track
                            .update('votes', voted => fromJS({
                                userVoted: !voted.get('userVoted'),
                                count: voted.get('userVoted') ? voted.get('count') - 1 : voted.get('count') + 1,
                            }))
                    }
                    
                    return track
                }))
        case TRACK_TOGGLE_PRIORITY:
            return state
                .update('data', tracks => tracks.map((track) => {
                    if (track.get('id') === action.payload) {
                        return track.set('priority', !track.get('priority'))
                    }
                    
                    return track
                }))
        default:
            return state
    }
}

export default tracksReducer
