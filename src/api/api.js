import * as axios from 'axios';


const instance = axios.create({
   baseURL: 'some url',
});

export const profileApi = {
   getProfile() {
      return instance.get()
   }
}