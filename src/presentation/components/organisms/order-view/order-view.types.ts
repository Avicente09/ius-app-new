import type { EntityId, Order } from '@domain/entities';

export interface OrderViewProps {
  order?: Order;
  onPlacement: () => void;
  onEdit: () => void;
  onRemoveTask: (taskId: EntityId) => void;
}
