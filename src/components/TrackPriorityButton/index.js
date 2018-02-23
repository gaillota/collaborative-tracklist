/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

export default styled.button`
    flex-shrink: 0;
    flex-grow: 0;
    margin: 0 10px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    outline: 0;
    background: #343434;
    border: 0;
    color: #fff;
    transition: box-shadow 150ms linear;
    
    &:hover {
        box-shadow: 3px 1px 5px rgba(0, 0, 0, 0.3);
    }
    
    &:active, &:focus {
        outline: 0;
    }
    
    &:active {
        box-shadow: none;
    }
    
    &.is-active {
        background: #8CCF8C;
    }
`
