import { SET_ALERT, REMOVE_ALERT } from './types';
import { v4 as uuidv4 } from 'uuid';

export const setAlert = (msg, alertType) => dispatch => {
    const id = uuidv4();

}