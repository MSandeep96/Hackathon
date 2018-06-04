import axios from 'axios';
import baseUrl from './api';

export default function solve(config){
  console.log(config);
  return axios.post(baseUrl + 'solve',{config})
    .then((res)=>{
      return res.data.moves;
    })
    .catch((err)=>{
      if(err.response.status < 500)
        return Promise.reject(err.response.data.error);
      else
        return Promise.reject('Something went wrong');
    });
}