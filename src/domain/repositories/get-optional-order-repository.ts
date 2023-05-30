import type { Order } from '../entities';

export interface GetOptionalOrderRepository {
  (): Promise<Order | undefined>;
}
