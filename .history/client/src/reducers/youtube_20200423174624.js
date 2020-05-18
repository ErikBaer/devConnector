import {
    YT_DATA
} from '../actions/types';

const initialState = {
    channels: [],
    loading: true,
    error: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_YTDATA:
            return {
                ...state,
                channels: payload
            }
        default:
            return state
    }
}
