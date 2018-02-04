import {FETCH_EVENTS} from '../actions/types';
import initialState from './initialState';


export default function(state = initialState.events, action) {
    switch(action.type) {
        case FETCH_EVENTS:
            return action.payload;
        default:
            return state;
    }
}