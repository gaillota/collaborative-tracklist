/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

export default styled.button`
    margin: 0 10px;
    border: 0;
    height: 60px;
    outline: 0;
    background: #343434;
    border-radius: 28px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
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
        background: #C56C6A;
    }
`
