// THIRD-PARTY
import axios, { AxiosError } from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;
const axiosServices = axios.create({
  baseURL: BASE_URL
});
// interceptor for http
axiosServices.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.log(error);
  }
);

export default axiosServices;
