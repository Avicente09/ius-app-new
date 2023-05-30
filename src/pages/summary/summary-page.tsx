import { getOptionalOrderUC } from '@domain/use-cases/get-optional-order';
import { getOrderFromContextFactory } from '@implementation/adapters/get-order-from-context';
import { useOrderContext } from '@implementation/context/order';
import { OrderView } from '@presentation/components/organisms';
import { NarrowStack } from '@presentation/components/templates';
import { createSimpleBusinessHook } from '@utils/business';

const useOrderFromContext = createSimpleBusinessHook(
  getOptionalOrderUC,
  getOrderFromContextFactory
);

export function SummaryPage(): JSX.Element {
  const context = useOrderContext();
  const { status, data: order } = useOrderFromContext(undefined, { context });

  console.log('[>] status: ', status);

  return (
    <NarrowStack title="Resumen de la Orden">
      <OrderView order={order} />
    </NarrowStack>
  );
}
