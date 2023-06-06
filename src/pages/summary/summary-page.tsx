import { OrderView } from '@presentation/components/organisms';
import { NarrowStack } from '@presentation/components/templates';
import { withAuth } from '@presentation/hoc/with-auth';
import { useCurrentOrder } from '@presentation/hooks/use-current-order';

function Page(): JSX.Element {
  const { order } = useCurrentOrder();

  // TODO: Handle order
  console.log('[>] order: ', order);

  return (
    <NarrowStack title="Resumen de la Orden">
      {order && <OrderView order={order} />}
    </NarrowStack>
  );
}

export const SummaryPage = withAuth(Page);
