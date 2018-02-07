
import React, {Component} from 'react';
import {connect} from 'react-redux';

import UserForm from './UserForm';


class ManageUsersPage extends Component {
    render() {
        return(
            <div>
                <UserForm />
            </div>
        )
        
    }
}

export default ManageUsersPage;