import axios from 'axios';
import { setAlert } from './alert'
imort { GET_POSTS, POST_ERROR } from './types'



export const getPost = () => async dispatch => {
    try {
        const res = await axios.get('/api/posts')
    } catch (error) {

    }
}