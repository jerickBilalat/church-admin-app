
import React, {Component} from 'react';
import EventForm from './EventForm';
import EventFormReview from './EventFormReview';
import {reduxForm} from 'redux-form';

class EventNew extends Component {
    state = {showFormReview: false};

    renderContent() {
        if(this.state.showFormReview) {
            return <EventFormReview
                    onCancel={() => this.setState({showFormReview: false})} />;
        }else {
            return <EventForm 
                    onSurveySubmit={() => this.setState({ showFormReview: true })}
            />
        }
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({
    form: 'eventForm'
})(EventNew);