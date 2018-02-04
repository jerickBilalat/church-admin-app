
import {FETCH_USER} from '../actions/types';
import initialState from './initialState';

export default function(state = initialState.auth, action) {
    switch(action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}