import axios from 'axios';
import { FETCH_USER } from './types';


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({
        type: FETCH_USER, 
        payload: res.data
    });
}

export const submitEvent = (values, history) => async dispatch => {
    console.log(values);
    // api post request
    history.push('/events');
    return { type: 'submit_survey' };

};


// export const submitEvent = values => async dispatch => {

//     const response = await axios.post('/api/events', values);

//     dispatch({
//         type: FETCH_USER, 
//         payload: response.data
//     });

// };