import { createSelector } from 'reselect'
import _sortBy from 'lodash/sortBy'
import { fromJS } from 'immutable'

const getState = state => state.get('tracks')

const makeTracksLoadingSelector = () => createSelector(
    getState,
    state => state.get('loading'),
)

const makeTracksErrorSelector = () => createSelector(
    getState,
    state => state.get('error'),
)

const makeTracksSelector = () => createSelector(
    getState,
    state => state.get('data', fromJS([])),
)

const makeSortedTracksSelector = () => createSelector(
    makeTracksSelector(),
    tracks => _sortBy(tracks.toJS(), [
        track => !track.priority,
        track => !track.votes.count,
        track => -track.id,
    ]),
)

const makeComputedTracksSelector = () => createSelector(
    makeSortedTracksSelector(),
    (sortedTracks) => {
        // Time remaining for playing song
        let timeReminaing = 30
        return sortedTracks.map((track) => {
            const newDuration = timeReminaing
            const { duration } = track
            // eslint-disable-next-line no-const-assign
            timeReminaing += duration
            
            return {
                ...track,
                duration: newDuration
            }
        })
    },
)

export {
    makeTracksLoadingSelector,
    makeTracksSelector,
    makeTracksErrorSelector,
    makeSortedTracksSelector,
    makeComputedTracksSelector,
}
