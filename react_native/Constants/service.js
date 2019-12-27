import axios from 'axios';
import store from '../store';
import { showLoaderScreen } from '../store/loader/action';

const apiServiceInstance = axios.create({
  baseURL: '',
  timeout: 30000,
});


const requestInterceptor = (config) => {
 let copyConfig = {};
  copyConfig.headers = {...config.headers, ...global.headerValues
  };
  copyConfig.baseURL = baseURL[global.env].GATEWAY_URL;
  // delete copyConfig.data;
  return {...config, ...copyConfig};
}

const requestInterceptorError = (error) => {
  return Promise.reject(error);
}

const responseInterceptor = (res) => {
 return res
};

const responseInterceptorError = (error) => {
  return error
}


apiServiceInstance.interceptors.request.use(requestInterceptor, requestInterceptorError);

apiServiceInstance.interceptors.response.use(responseInterceptor, responseInterceptorError);

export { apiServiceInstance }