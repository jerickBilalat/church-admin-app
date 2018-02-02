import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions';


const EventFormReview = ({ onCancel, formValues, submitEvent, history }) => {

    const reviewFields = _.map(formFields, ({label, name}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        )
    })

    return (
        <div>
            <h5>Confirm entries</h5>
            {reviewFields}
            <button
                className="yellow darken-3 btn-flat"
                onClick={onCancel}>
                Back
            </button>
            <button
                onClick={() => submitEvent(formValues, history)}
                className="green btn-flat right white-text">
                Save Event
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        formValues: state.form.eventForm.values
    }
}

export default connect(mapStateToProps, actions)(withRouter(EventFormReview));