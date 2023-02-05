import {BASE_URL} from './apiConstants';
import axios from 'axios';

//Basic config
const config = {
  baseURL: BASE_URL,
  timeout: 50 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
};
const httpClient = axios.create(config);
/** Adding the response interceptors */
/* istanbul ignore next */
httpClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return new Promise((resolve, reject) => {
      reject(error);
    });
  },
);

export default httpClient;
