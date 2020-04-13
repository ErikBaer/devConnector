import axios from 'axios';

const setAuthToken = token => {
    if (token === null) {
        delete axios.defaults.headers.common['x-auth-token'];
        localStorage.removeItem('token');



    } else {
        axios.defaults.headers.common['x-auth-token'] = token;
        localStorage.setItem('token', token);
    }
}

export default setAuthToken; 