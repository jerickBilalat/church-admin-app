import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import LandingPage from './LandingPage';
import ManageEventPage  from './events/ManageEventPage';
import ManageUserPage from './users/ManageUserPage';
import Dashboard from './Dashboard';


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route path="/events/new" component={ManageEventPage} />
                        <Route path="/user/new" component={ManageUserPage} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);