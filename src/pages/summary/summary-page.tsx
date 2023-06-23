import type { EntityId } from '@domain/entities';
import { OrderView } from '@presentation/components/organisms';
import { NarrowStack } from '@presentation/components/templates';
import { withAuth } from '@presentation/hoc/with-auth';
import { useCurrentOrder } from '@presentation/hooks/use-current-order';
import { useNavigate } from 'react-router-dom';

function Page(): JSX.Element {
  const { order } = useCurrentOrder();
  const navigate = useNavigate();

  const goHome = () => navigate('/home');
  const onRemoveTask = (_taskId: EntityId) => {
    //TODO: Remove task from current order
  };
  const placeOrder = () => {
    //TODO: Place current order on the server
  };

  return (
    <NarrowStack title="Resumen de la Orden">
      {order && (
        <OrderView
          order={order}
          onEdit={goHome}
          onPlacement={placeOrder}
          onRemoveTask={onRemoveTask}
        />
      )}
    </NarrowStack>
  );
}

export const SummaryPage = withAuth(Page);
