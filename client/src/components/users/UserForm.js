
import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const userTypes = [{value: "Default"},{value: "Administrator"}];
const roles = [{value: "Secretary"}, {value: "Clerk"}, {value: "Decon"}];

const UserForm = ({onChange}) => {
    return (
        <form>
            <div className="row">
                <h1>Add User</h1>
                <p style={{color:'red'}}>Component functionality is currenly not complete</p>
                <TextInput 
                    type="text"
                    label="First Name"
                    name="first name"
                    onChange={onChange}/>
                <TextInput 
                    type="text"
                    label="Last Name"
                    name="last name"
                    onChange={onChange}/>

                <SelectInput
                    name="role"
                    label="Role"
                    value=""
                    defaultOption="Select Role"
                    onChange={onChange}
                    options = {roles}/>    
                <SelectInput
                    name="usertype"
                    label="User Type"
                    value="Default"
                    defaultOption="Select User Type"
                    onChange={onChange}
                    options = {userTypes}/>
            </div>
        </form>
    )
}

export default UserForm;