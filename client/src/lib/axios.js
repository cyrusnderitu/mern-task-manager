import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api', // Base URL for the API
    withCredentials: true, // Include cookies in requests
});

export default axiosInstance;