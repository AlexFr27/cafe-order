import { api } from './api';
import { BasketItem } from '../features/basket/types';

export const basketApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBasket: build.query<BasketItem[], string | undefined>({
      query: (tableId) => `/basket?tableId=${tableId}`,
      providesTags: ['Basket']
    }),
    addItem: build.mutation<void, BasketItem>({
      query: (item) => ({ url: '/basket', method: 'POST', body: item }),
      invalidatesTags: ['Basket']
    }),
    clearBasket: build.mutation<void, string | undefined>({
      query: (tableId) => ({ url: `/basket?tableId=${tableId}`, method: 'DELETE' }),
      invalidatesTags: ['Basket']
    })
  })
});
export const { useGetBasketQuery, useAddItemMutation, useClearBasketMutation } = basketApi;