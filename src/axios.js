import axios from 'axios';

const instance = axios.create({
    baseURL: axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
})

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'

// instance.interceptors.request...

export default instance;