/* eslint-disable no-unused-vars */
import React from 'react'
import FlipMove from 'react-flip-move'
import PropTypes from 'prop-types'

function List({ items, animation, component: Component }) {
    // Return single component if no items if provided (used mostly for error display)
    if (!items) {
        return <Component/>
    }
    
    const Wrapper = animation ? FlipMove : React.Fragment
    
    return (
        <Wrapper {...animation}>
            {items.map(item => (
                <Component item={item} key={item.id}/>
            ))}
        </Wrapper>
    )
}

List.propTypes = {
    items: PropTypes.array,
    animated: PropTypes.object,
    component: PropTypes.func,
}

export default List
