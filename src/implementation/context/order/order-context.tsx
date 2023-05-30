import type { Order } from '@domain/entities';
import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

export interface IOrderContext {
  order: Order | null;
  orderSetter: (order: Order | null) => void;
}

export const OrderContext = createContext<IOrderContext>({} as IOrderContext);

export interface OrderProviderProps {
  children: ReactNode;
  orderInitialGetter?: () => Promise<Order | null>;
}

//TODO: remove this temporal Order
const temporalOrder: Order = {
  id: '1',
  status: 'draft',
  userId: '1',
  tasks: [
    {
      id: '1',
      type: 'pick',
      status: 'pending',
      address: {
        department: 'Quetzaltenango',
        town: 'Cantel',
        village: 'Pasac 2',
        address: 'Av. Francisco Rodas 1-54A',
      },
      instruction: 'Recoger paquete',
    },
    {
      id: '2',
      type: 'deliver',
      status: 'pending',
      address: {
        department: 'Suchitepequez',
        town: 'PuebloNuevo',
        village: 'Centro',
        address: "Raw's Home",
      },
      instruction: 'Entregar paquete',
    },
  ],
};

export function OrderProvider({
  children,
  orderInitialGetter,
}: OrderProviderProps): JSX.Element {
  const [order, orderSetter] = useState<Order | null>(temporalOrder);

  useEffect(() => {
    if (orderInitialGetter) {
      // TODO: Handle exceptions
      orderInitialGetter().then(orderSetter);
    }
  }, [orderInitialGetter]);

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
