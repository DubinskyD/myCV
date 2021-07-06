import * as axios from 'axios';

const instance = axios.create({
   baseURL: process.env.NODE_ENV === 'production' ? window.location.origin : 'http://localhost:5001',
});

export const profileApi = {
   getProfile() {
      return instance.get('/cv')
   }
}