import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';
const API_TIMEOUT = 6000;

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Authorization': "JWT " + localStorage.getItem('access_token'),
    'Content-Type': 'application/json',
    'accept': 'application/json'
  }
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const originalRequest = error.config;

    // Prevent infinite loops
    if (error.response.status === 401 && originalRequest.url === API_URL + 'token/refresh/') {
      return Promise.reject(error);
    }

    if (error.response.data.code === "token_not_valid" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized") {
      const refreshToken = localStorage.getItem('refresh_token');

      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));
        const now = Math.ceil(Date.now() / 1000);

        if (tokenParts.exp > now) {
          return axiosInstance
            .post('/token/refresh/', {refresh: refreshToken})
            .then((response) => {

              localStorage.setItem('access_token', response.data.access);
              localStorage.setItem('refresh_token', response.data.refresh);

              axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
              originalRequest.headers['Authorization'] = "JWT " + response.data.access;

              return axiosInstance(originalRequest);
            })
            .catch(err => {
              console.log(err)
            });
        } else {
          console.log("Refresh token is expired", tokenParts.exp, now);
        }
      } else {
        console.log("Refresh token not available.")
      }
    }
    // specific error handling done elsewhere
    return Promise.reject(error);
  }
);

export default axiosInstance;
