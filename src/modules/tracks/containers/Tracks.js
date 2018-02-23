import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { makeTracksErrorSelector, makeTracksLoadingSelector, makeTracksSelector } from '../selectors'
import { get } from '../actions'

import Section from '../../../components/Section'
import Loading from '../../../components/Loading'

class Tracks extends React.Component {
    componentDidMount() {
        this.props.get()
    }
    
    render() {
        if (this.props.loading) {
            return <Loading/>
        }
        
        if (this.props.error) {
            return (
                <p>An error occurred: {this.props.error}</p>
            )
        }
        
        return (
            <Section>
                Tracklist
            </Section>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    loading: makeTracksLoadingSelector(),
    tracks: makeTracksSelector(),
    error: makeTracksErrorSelector(),
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    get,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Tracks)
