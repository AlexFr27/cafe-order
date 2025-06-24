import { api } from '../../api/api';
import { Credentials } from './types';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<{ token: string; roles: string[] }, Credentials>({
      query: (creds) => ({ url: '/auth/login', method: 'POST', body: creds })
    })
  })
});
export const { useLoginMutation } = authApi;