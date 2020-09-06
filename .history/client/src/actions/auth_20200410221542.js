import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

//Register User

export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password })

    try {
        const res = await axios.post / ''
    } catch (err) {
        console.error
    }
}