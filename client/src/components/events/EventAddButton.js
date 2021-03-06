import React from 'react';
import {Link} from 'react-router-dom';

const EventAddButton = () => {
    
    return (
        <Link
            to = "/events/new"
        >
            + Add Event
        </Link>
    )
}

export default EventAddButton;