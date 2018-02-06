import axios from 'axios';
import { FETCH_USER, FETCH_EVENTS } from './types';

import mockEventApi from '../mockApi/mockEventApi';
import mockAuthApi from '../mockApi/mockAuthApi';

export const fetchUser = () => async dispatch => {
    try {
        
        const res = await mockAuthApi.fetchUser();
        dispatch({ type: FETCH_USER, payload: res});

        //const res = await axios.get('/api/current_user');
        //dispatch({ type: FETCH_USER, payload: res.data});
    } catch (error) {
        console.log(error);
    }
    
}

export const submitEvent = (values, history) => async dispatch => {
    try {



        const res = await axios.post('/api/events', values);
        history.push('/');
        dispatch({ type: FETCH_USER, payload: res.data  });
    } catch (error) {
        console.log(error);
    }
};


export const fetchEvents = () => async dispatch => {
    try {
        
        // mock api
        const res = await mockEventApi.fetchEvents();
        dispatch({ type: FETCH_EVENTS, payload: res});

        //const res = await axios.get('/api/events');
        //dispatch({ type: FETCH_EVENTS, payload: res.data});
    } catch (error) {
        console.log(error);
    }
    
}
