import axios from 'axios';
const baseUrl = 'http://10.0.22.186:5555'

const client = axios.create({
    baseURL: baseUrl
})

export default client;