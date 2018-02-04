import {combineReducers} from 'redux';
import authReducer from './authReducer';
import eventReducer from './eventReducer';
import {reducer as reduxForm} from 'redux-form';

export default combineReducers({
    events: eventReducer,
    auth: authReducer,
    form: reduxForm
})