import {FETCH_EVENTS, SUBMIT_EVENT} from '../actions/types';
import initialState from './initialState';


export default function(state = initialState.events, action) {
    switch(action.type) {
        case FETCH_EVENTS:
            return action.payload;
        case SUBMIT_EVENT:
            return action.payload;
        default:
            return state;
    }
}