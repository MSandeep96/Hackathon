import axios from 'axios';
import baseUrl from './api';

export default function getLeaderboard(){
  return axios.get(baseUrl + 'leaderboard')
    .then((docs)=>{
      return docs.data;
    })
    .catch((err) => {
      if(err.response.status < 500)
        return Promise.reject(err.response.data.error);
      else
        return Promise.reject('Something went wrong');
    });
}
