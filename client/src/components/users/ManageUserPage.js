
import React, {Component} from 'react';
import {connect} from 'react-redux';

import UserForm from './UserForm';


class ManageUsersPage extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }


    onChange({target}) {
        console.log(target.value);
    }

    render() {
        return(
            <div>
                <UserForm onChange={this.onChange}/>
            </div>
        )
        
    }
}

export default ManageUsersPage;