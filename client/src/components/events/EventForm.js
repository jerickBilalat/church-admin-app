import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import PropTypes from 'prop-types';

import EventField from './EventField';
import formFields from './formFields';

class EventForm extends Component {

    renderEventField () {
        return _.map(formFields, ( {label, name} ) => {
            return (
            <Field  
                key={name} 
                component={EventField} 
                type="text" 
                label={label}
                name={name}/>
            );
        });
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    <h1>Add Event</h1>
                    {this.renderEventField()}
                    <Link
                        to="/events"
                        className="red btn-flat white-text" >
                        Cancel
                    </Link>
                    <button 
                        type="submit" 
                        className="teal btn-flat right white-text">
                        Next
                    </button>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    _.each(formFields, ({name}) => {
        if(!values[name]) errors[name] = 'You must provide a value';
    })

    return errors;
}

export default reduxForm({
    validate,
    form: 'eventForm',
    destroyOnUnmount: false
})(EventForm);