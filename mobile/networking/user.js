import {errHandler} from './api';

export async function getProfile(api) {
    try {
        let res = await api.get('/user/profile');
        return res.data;
    } catch (e) {
        throw errHandler(e);
    }
}