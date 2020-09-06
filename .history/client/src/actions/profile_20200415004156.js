import axios from 'axios';
import { setalert } from './alert';

import { GET_PROFILE, PROFILE_ERROR } from './types';

//Get current Users Profile

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('api/profile/me')
    } catch (err) {

    }
}