import {errHandler} from './api';

export async function register(api, data) {
    try {
        let res = await api.post(`/auth/register`, data);
        return res.data;
    } catch (e) {
        throw errHandler(e);
    }
}

export async function login(api, data) {
    try {
        let res = await api.post('/auth/login', data);
        return res.data;
    } catch (e) {
        throw errHandler(e);
    }
}