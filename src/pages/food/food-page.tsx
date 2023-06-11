import type { Order } from '@domain/entities';
import type { AttachFoodDeliveryTasksRepository } from '@domain/repositories';
import { attachFoodDeliveryTasksUC } from '@domain/use-cases/attach-food-delivery-tasks';
import { createDeliveryTaskFromFoodFormFieldsFactory } from '@implementation/adapters/create-delivery-task-from-food-form-fields';
import { createDraftOrder } from '@implementation/adapters/create-draft-order';
import { createPickUpTaskFromFoodFormFieldsFactory } from '@implementation/adapters/create-pick-up-task-from-food-form-fields';
import { setOrderWithSyncSetterFactory } from '@implementation/adapters/set-order-with-sync-setter';
import type { FoodFormFieldValues } from '@presentation/components/organisms';
import { FoodForm } from '@presentation/components/organisms';
import { NarrowStack } from '@presentation/components/templates';
import { withAuth } from '@presentation/hoc/with-auth';
import { useCurrentOrder } from '@presentation/hooks/use-current-order';
import { createInvokeBusinessHook } from '@utils/business/create-invoke-business-hook';
import { always } from 'ramda';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Instanced use for food page
 * @param provider - Partial implementation of AttachFoodDeliveryTasksRepository to require only the context as hook dependency
 * @param fields - FoodFormFieldValues to create complete the provider properties that create the tasks. This is available only on the submit event
 * @returns - Promise<Order> with the final order but already saved on the context
 */
const wrappedUseCase = (
  provider: Pick<
    AttachFoodDeliveryTasksRepository,
    'getExistingDraftOrder' | 'createNewDraftOrder' | 'saveOrder'
  >,
  fields: FoodFormFieldValues
) =>
  attachFoodDeliveryTasksUC({
    ...provider,
    getPickUpTask: createPickUpTaskFromFoodFormFieldsFactory({ fields }),
    getDeliveryTask: createDeliveryTaskFromFoodFormFieldsFactory({ fields }),
  });

/**
 * Instanced provider factory for food page
 * @param - Hook dependency object
 * @returns - Provider for the use case. It will change regarding the dependency object
 */
const wrappedProviderFactory = (factoryParams: {
  currentOrder: Order | undefined;
  currentOrderSetter: (order: Order) => void;
}) => ({
  getExistingDraftOrder: always(Promise.resolve(factoryParams.currentOrder)),
  createNewDraftOrder: createDraftOrder,
  saveOrder: setOrderWithSyncSetterFactory({
    orderSetter: factoryParams.currentOrderSetter,
  }),
});

/**
 * Instanced hook only for food page
 */
const useAttachFoodDeliveryTask = createInvokeBusinessHook(
  wrappedUseCase,
  wrappedProviderFactory
);

function Page(): JSX.Element {
  const navigate = useNavigate();
  const { order, save } = useCurrentOrder();
  const { state, invoke: attachFoodDeliveryTask } = useAttachFoodDeliveryTask({
    currentOrder: order ?? undefined,
    currentOrderSetter: save,
  });

  useEffect(() => {
    if (state.status === 'success') {
      navigate('/summary');
    }
    // TODO: Add UI error handling using state.status === 'error' and state.errors
  }, [navigate, state]);

  return (
    <NarrowStack title="COMIDA">
      <FoodForm onSubmit={attachFoodDeliveryTask} />
    </NarrowStack>
  );
}

export const FoodPage = withAuth(Page);
