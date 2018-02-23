/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Photo = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-size: cover;
`

function Avatar(props) {
    return <Photo style={{ backgroundImage: `url(${props.url})`}}/>
}

Avatar.propTypes = {
    url: PropTypes.string.isRequired
}

export default Avatar
