import axios from 'axios';
import { setAlert } from './alert'
import { GET_POSTS, POST_ERROR, UPDATE_LIKES } from './types'



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


export const addLike = postId => async dispatch => {
    try {
        const res = await axios.put(`/api/post/${postId}`);

        dispatch({
            type: UPDATE_LIKES,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}