import axios, { AxiosInstance } from 'axios';

import { LoginFormValues } from './hooks/useLogin';
import { RegisterFormValues } from './hooks/useRegister';

type RegisterPayload = Pick<RegisterFormValues, 'email' | 'password'>;
type UpdateProfilePayload = Pick<
  RegisterFormValues,
  'first_name' | 'last_name' | 'company' | 'job'
>;

class AuthAPI {
  axiosClient: AxiosInstance;

  constructor(private baseURL: string) {
    this.axiosClient = axios.create({
      baseURL: this.baseURL,
    });

    this.axiosClient.interceptors.response.use(
      (r) => r.data,
      (err: any) => {
        if (err.response) {
          throw new Error(err.response.data.error);
        }
      },
    );
  }

  login(values: LoginFormValues) {
    return this.axiosClient.post('/login', values);
  }

  register(values: RegisterPayload) {
    return this.axiosClient.post('/register', values);
  }

  updateProfile(values: UpdateProfilePayload, id: string) {
    return this.axiosClient.patch(`/users/${id}`, values);
  }
}

export const authService = new AuthAPI('https://reqres.in/api');
