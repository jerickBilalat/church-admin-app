

import React from 'react';
import EventList from './events/EventList';

const Dashboard = ({events}) => {
    return (
        <div>
            <div>Dashboard</div>
            <EventList events={events}/>
        </div>
    )
}

export default Dashboard;