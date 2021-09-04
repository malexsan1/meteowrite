import axios, { AxiosInstance } from 'axios';

import { LoginFormValues } from './hooks/useLogin';

class AuthAPI {
  axiosClient: AxiosInstance;

  constructor(private baseURL: string) {
    this.axiosClient = axios.create({
      baseURL: this.baseURL,
    });
  }

  login({ email, password }: LoginFormValues) {
    return this.axiosClient.post('/login', { email, password }).catch((err) => {
      if (err.response) {
        throw new Error(err.response.data.error);
      }
    });
  }
}

export const authService = new AuthAPI('https://reqres.in/api');
