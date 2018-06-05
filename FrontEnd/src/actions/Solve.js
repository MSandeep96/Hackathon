import axios from 'axios';
import baseUrl from './api';

export default function solve(config){
  //waits for 5 mins
  console.log(config);
  return axios.post(baseUrl + 'solve',{config},{timeout: 1000000})
    .then((res)=>{
      console.log(res.data);
      return res.data;
    })
    .catch((err)=>{
      if(err.response.status < 500)
        return Promise.reject(err.response.data.error);
      else
        return Promise.reject('Something went wrong');
    });
}