import axios from 'axios';
import Cookies from 'js-cookie';

import {getCookieFromReq} from '../helpers/utils'

const axiosInstance = axios.create({
    baseURL: `${process.env.BASE_URL}/api/v1`,
    timeout: 3000
});

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


const rejectPromise = (resError) => {
    let error = {};
    if (resError && resError.response && resError.response.data) {
        error = resError.response.data;
    } else {
        error = resError;
    }
    return Promise.reject(error);
};

export const getSecretData = async () => {
    return await axiosInstance.get('/secret', setAuthHeader()).then(response => response.data);
};

export const getAllPortfolio = async () => {
    return await axiosInstance.get('/portfolio').then(response => response.data);
};


export const createPortfolio = async (portfolioData) => {
    return await axiosInstance.post('/portfolio', portfolioData, setAuthHeader())
        .then(response => response.data).catch((err) => rejectPromise(err))
};

export const getPortfolioById = async (id, req) => {
    return await axiosInstance.get(`/portfolio/${id}`).then(response => response.data);
};

export const getPortfolioBySlug = async (slug) => {
    return await axiosInstance.get(`/portfolio/s/${slug}`).then(response => response.data);
};

export const updatePortfolio = async (portfolioData) => {
    return await axiosInstance.patch(`/portfolio/${portfolioData._id}`, portfolioData, setAuthHeader())
        .then(response => response.data).catch((err) => rejectPromise(err))
};


export const deleteProject = (projectId) => {
    return axiosInstance.delete(`/portfolio/${projectId}`, setAuthHeader()).then(response => response.data)
};