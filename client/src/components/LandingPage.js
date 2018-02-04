import React, {Component} from 'react';
import {connect} from 'react-redux';

import EventAddButton from './events/EventAddButton';
import Dashboard from './Dashboard';

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
                        <Dashboard />
                    </div>
                );

        }
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

function MapStateToProps( {auth} ) {
    return {auth};
}

export default connect(MapStateToProps)(Landing);