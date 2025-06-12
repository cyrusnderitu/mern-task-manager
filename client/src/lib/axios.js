import axios from 'axios'

export default  axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/', // Base URL for the API
    timeout: 10000, // Request timeout in milliseconds
    withCredentials: true, // Include cookies in requests
})