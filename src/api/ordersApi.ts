import { api } from './api';
import { Order } from '../features/orders/types';

export const ordersApi = api.injectEndpoints({
  endpoints: (build) => ({
    placeOrder: build.mutation<Order, { tableId?: string }>({
      query: ({ tableId }) => ({ url: '/orders', method: 'POST', body: { tableId } }),
      invalidatesTags: ['Orders', 'Basket']
    }),
    getOrders: build.query<Order[], void>({
      query: () => '/orders',
      providesTags: ['Orders']
    })
  })
});
export const { usePlaceOrderMutation, useGetOrdersQuery } = ordersApi;