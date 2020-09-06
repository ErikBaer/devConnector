import axios from 'axios';
import { setAlert } from './alert'
import { GET_POSTS, POST_ERROR } from './types'



export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('/api/posts');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

//Add Like


export const addLike = id => async dispatch => {
    try {
        const res = await axios.put('/api/post/');

        dispatch({
            type: ADD_LIKE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}