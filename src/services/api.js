import axios from 'axios';


const api = axios.create({
    baseURL: 'https://e7782e2l83.execute-api.us-east-1.amazonaws.com',
});

export async function sendOTP(cellphone) {
    return await api.post('/PRD/v1/otp/request', {
        cellphone
    });
}

export async function verifyOTP(code) {
    return await api.post('/PRD/v1/otp/confirm', {
        otp: code
    });
}
