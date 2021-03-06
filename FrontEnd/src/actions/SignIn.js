import axios from 'axios';
import baseUrl from './api';

export function signin(user){
  return axios.post(baseUrl + 'users', user)
    .then((res) => {
      localStorage.setItem('auth', res.headers['x-auth']);
      return res.data;
    })
    .catch((err) => {
      if(err.response.status < 500)
        return Promise.reject(err.response.data.error);
      else
        return Promise.reject('Something went wrong');
    });
}