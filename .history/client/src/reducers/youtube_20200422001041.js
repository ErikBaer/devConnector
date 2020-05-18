// get Youtube Data

import axios from 'axios';
import { setAlert } from './alert';
import { GET_YTDATA, PROFILE_ERROR } from './types'

export const getYoutubeData = () => async dispatch => {
    try {
        const res = await axios.get(`/api/youtube`);

        dispatch({
            type: GET_YTDATA,
            payload: res.data
        });
        dispatch(setAlert('Data fetched from Youtube', 'success'))
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};