import axios from 'axios';

import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '',
  },
});

// Adding interceptor to include authorization header in each request
$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization =
      localStorage.getItem(USER_LOCAL_STORAGE_KEY) || ''; // modify Authorization header to include token from local storage
  }

  return config;
});
