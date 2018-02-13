

import React,{Component} from 'react';
import EventList from './events/EventList';
import {connect} from 'react-redux';
import {fetchEvents} from '../actions';

 class Dashboard extends Component{

    renderEvents() {
        if(this.props.events.length === 0) {
            return <p>No current events</p>
        }else {
            return <EventList events={this.props.events}/>
        }
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

     render() {
        return (
            <div>
                <h1>Events</h1>
                {this.renderEvents()}
            </div>
        )
     }
 } 


function mapStateToProps( {events}, ownProps ) {
    return {events};
}

export default connect(mapStateToProps, {fetchEvents})(Dashboard);