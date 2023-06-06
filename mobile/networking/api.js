import axios from 'axios';

export const api = axios.create({
    baseURL: '',
});

export function errHandler(err) {
    if (err.response) {
        let {data} = err.response;
        if (!data) {
            return new Error('Sistema indisponível no momento.');
        }
        return new Error(JSON.stringify(data));
    } else if (err.request || !err.status) {
        return new Error('Erro de rede.');
    } else {
        return new Error('Sistema indisponível no momento.');
    }
}