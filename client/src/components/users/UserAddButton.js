import React from 'react';
import {Link} from 'react-router-dom';

const UserAddButton = () => {
    
    return (
        <Link
            to = "/user/new"
        >
            + Add User
        </Link>
    )
}

export default UserAddButton;