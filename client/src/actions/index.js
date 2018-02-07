import axios from 'axios';
import { FETCH_USER, FETCH_EVENTS} from './types';

export const fetchUser = () => async dispatch => {
    try {
        const res = await axios.get('/api/current_user');
        dispatch({ type: FETCH_USER, payload: res.data});
    } catch (error) {
        console.log(error);
    }
    
}

export const submitEvent = (values, history) => async dispatch => {
    try {
        const res = await axios.post('/api/events', values);
        history.push('/dashboard');
        dispatch({ type: FETCH_USER, payload: res.data  });
    } catch (error) {
        console.log(error);
    }
};


export const fetchEvents = () => async dispatch => {
    try {
        const res = await axios.get('/api/events');
        dispatch({ type: FETCH_EVENTS, payload: res.data});
    } catch (error) {
        console.log(error);
    }
    
}
