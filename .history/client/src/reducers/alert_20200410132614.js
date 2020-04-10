import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [

];

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ALERT:
            return [...state, action.payload]
    }
}