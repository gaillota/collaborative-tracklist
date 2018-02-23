/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const AlbumCover = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 5px;
    background-size: cover;
    margin-right: 10px;
`

function TrackCover(props) {
    return <AlbumCover style={{ backgroundImage: `url(${props.url})`}}/>
}

TrackCover.propTypes = {
    url: PropTypes.string.isRequired
}

export default TrackCover
