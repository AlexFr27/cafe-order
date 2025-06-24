import { api } from './api';
import { MenuItem } from '../features/menu/types';
import menuData from './mocks/menu.json';

export const menuApi = api.injectEndpoints({
  endpoints: (build) => ({
    fetchMenu: build.query<MenuItem[], void>({
      queryFn: async () => {
        return { data: menuData };
      },
      providesTags: ['Menu'],
    }),
  }),
});

export const { useFetchMenuQuery } = menuApi;
