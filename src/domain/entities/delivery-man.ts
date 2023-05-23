import type { Phone } from './attributes';
import type { EntityId } from './entity';

export interface DeliveryMan {
  id: EntityId;
  name: string;
  email: string;
  phone: Phone;
}
