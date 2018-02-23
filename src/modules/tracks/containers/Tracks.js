/* eslint-disable no-unused-vars */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import TrackListItem from './TrackListItem'
import { makeComputedTracksSelector, makeTracksErrorSelector, makeTracksLoadingSelector, } from '../selectors'
import { get } from '../actions'
import Loading from '../../../components/Loading'
import List from '../../../components/List'
import EmptyTrackList from '../../../components/EmptyTrackList'

class Tracks extends React.Component {
    componentDidMount() {
        this.props.get()
    }
    
    render() {
        if (this.props.loading && !this.props.tracks.length) {
            return <Loading/>
        }
        
        if (this.props.error) {
            return (
                <p>An error occurred: {this.props.error}</p>
            )
        }
        
        if (!this.props.tracks.length) {
            return <EmptyTrackList/>
        }
        
        return (
            <List items={this.props.tracks} component={TrackListItem} animation={{
                duration: 300,
                easing: 'ease-out',
            }}/>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    loading: makeTracksLoadingSelector(),
    tracks: makeComputedTracksSelector(),
    error: makeTracksErrorSelector(),
})

const mapDispatchToProps = dispatch => bindActionCreators({
    get,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Tracks)
