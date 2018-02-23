import { createSelector } from 'reselect'

const getState = (state) => state.get('tracks')

const makeTracksLoadingSelector = () => createSelector(
    getState,
    (state) => state.get('loading'),
)

const makeTracksSelector = () => createSelector(
    getState,
    (state) => state.get('data')
)

const makeTracksErrorSelector = () => createSelector(
    getState,
    (state) => state.get('error')
)

export {
    makeTracksLoadingSelector,
    makeTracksSelector,
    makeTracksErrorSelector
}
