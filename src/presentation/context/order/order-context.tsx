import type { Order } from '@domain/entities';
import type { PropsWithChildren, ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

export interface IOrderContext {
  order: Order | null;
  orderSetter: (order: Order | null) => void;
}

export const OrderContext = createContext<IOrderContext>({} as IOrderContext);

export interface OrderProviderProps {
  children: ReactNode;
  orderInitialGetter?: () => Promise<Order | null>;
}

export function OrderProvider({ children }: PropsWithChildren): JSX.Element {
  const [order, orderSetter] = useState<Order | null>(null);

  return (
    <OrderContext.Provider value={{ order, orderSetter }}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrderContext = () => {
  const context = useContext(OrderContext);

  if (!context.orderSetter) {
    throw new Error('OrderContext is not initialized');
  }

  return context;
};
