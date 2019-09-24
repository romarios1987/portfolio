import axios from 'axios';
import Cookies from 'js-cookie';

import {getCookieFromReq} from '../helpers/utils'


const setAuthHeader = (req) => {
    const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');
    if (token) {
        return {
            headers: {'Authorization': `Bearer ${token}`}
        }
    } else {
        return undefined;
    }
};


export const getSecretData = async () => {
    return await axios.get('/api/v1/secret', setAuthHeader()).then(response => response.data);
};

export const getSecretDataServer = async (req) => {
    return await axios.get('http://localhost:3000/api/v1/secret', setAuthHeader(req)).then(response => response.data);
};