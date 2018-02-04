
import EventListItem from './EventListItem';

import React from 'react';

const EventList = ({events}) => {
    return (
        <ul>
            {events.map(event => <EventListItem key={event._id} {...event}/>)}
        </ul>
    )
}

export default EventList;