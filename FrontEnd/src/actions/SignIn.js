import axios from 'axios';

export function signin(user){
  return axios.post('http://localhost:3000/users', user)
    .then((res) => {
      localStorage.setItem('auth', res.headers['x-auth']);
      console.log('here');
      return res.data;
    })
    .catch((err) => {
      console.log('here2');
      if(err.response.status < 500)
        return Promise.reject(err.response.data.error);
      else
        return Promise.reject('Something went wrong');
    });
}