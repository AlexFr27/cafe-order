import { BasketItem } from '../basket/types';

export interface Order { id: string; tableId?: string; items: BasketItem[]; status: 'pending' | 'completed'; }
