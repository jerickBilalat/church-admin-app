import React, {Component} from 'react';
import {connect} from 'react-redux';

import EventAddButton from './events/EventAddButton';
import Dashboard from './Dashboard';
import  {fetchEvents} from '../actions';

class Landing extends Component{
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <div>
                        <h2>Welcome to NLCF Admin</h2>
                        <p>Create and publish events</p>
                        <a href="/auth/google">Login with Google</a>
                    </div>
                ); 
            default:
                return (
                    <div>
                        <EventAddButton />
                        <Dashboard events={this.props.events} />
                    </div>
                );

        }
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

function mapStateToProps( {auth, events}, ownProps ) {
    return {auth, events};
}

export default connect(mapStateToProps, {fetchEvents})(Landing);