import { fromJS } from 'immutable'

const initialTracklistState = fromJS({
    loading: false,
    data: [],
    error: null
})

function tracksReducer(state = initialTracklistState, action) {
    return state
}

export default tracksReducer
