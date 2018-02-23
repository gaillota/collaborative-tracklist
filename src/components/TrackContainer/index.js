/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding: 10px;
    position: relative;
    
    &:not(:first-child) {
        border-top: 1px solid #DDD;
    }
    
    &.is-priority::before {
        content: "";
        background: #8CCF8C;
        position: absolute;
        z-index: 999;
        bottom: -20px;
        left: -20px;
        width: 0;
        height: 0;
        background: transparent;
        border: 20px solid transparent;
        border-right: 20px solid #8CCF8C;
        transform: rotate(-45deg);
    }
    
    &.is-priority::after {
        content: "";
        position: absolute;
        z-index: 999;
        border-bottom: 5px solid #8CCF8C;
        background-color: transparent;
        bottom: 0;
        left: 0;
        right: 0;
    }
`
