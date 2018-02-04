import axios from 'axios';
import { FETCH_USER, FETCH_EVENTS } from './types';


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({
        type: FETCH_USER, 
        payload: res.data
    });
}

export const submitEvent = (values, history) => async dispatch => {
    
    const res = await axios.post('/api/events', values);

    history.push('/');
    dispatch({ type: 'submit_event', payload: res.data  });

};


export const fetchEvents = () => async dispatch => {
    const res = await axios.get('/api/events');
    dispatch({ type: FETCH_EVENTS, payload: res.data});
}
