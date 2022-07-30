import React from 'react'


function Sidebar(props) {
    return (
        <div className='sidebar'>
            <a className='signup' onClick={props.toggleShowCreateEvent}>Add Event</a>
            <a>Profile</a>
            <a>item 3</a>
            <a>item 4</a>
        </div>
    )
}

export default Sidebar