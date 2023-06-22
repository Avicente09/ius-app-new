import type { Order } from '@domain/entities';
import type { AttachFoodDeliveryTasksRepository } from '@domain/repositories';
import { attachFoodDeliveryTasksUC } from '@domain/use-cases/attach-food-delivery-tasks';
import { createDeliveryTaskFromFoodFormFieldsFactory } from '@implementation/adapters/create-delivery-task-from-food-form-fields';
import { createDraftOrder } from '@implementation/adapters/create-draft-order';
import { createPickUpTaskFromFoodFormFieldsFactory } from '@implementation/adapters/create-pick-up-task-from-food-form-fields';
import { setOrderWithSyncSetterFactory } from '@implementation/adapters/set-order-with-sync-setter';
import type { FoodFormFieldValues } from '@presentation/components/organisms';
import { FoodForm, useFoodForm } from '@presentation/components/organisms';
import { NarrowStack } from '@presentation/components/templates';
import { withAuth } from '@presentation/hoc/with-auth';
import { useCurrentOrder } from '@presentation/hooks/use-current-order';
import { createInvokeBusinessHook } from '@utils/business/create-invoke-business-hook';
import { always } from 'ramda';
import { useEffect } from 'react';
import type { UseFormGetValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

/*
=============================================================================
TODO: Remove this comment once all the architecture is clear
=============================================================================

This is the method target we want to achieve. We use the business hook to avoid the explicit creation of this composed function.
This function shows the composition of the use case with the adapters and the repository.
The parameters of the function are the dependencies of the use case and the repository.
The return value of the function is the use case itself.

const attachFoodDeliveryTasks = (
  order: Order,
  orderSetter: (order: Order) => Promise<Order>,
  formFields: FoodFormFieldValues
) => {
  return attachFoodDeliveryTasksUC({
    getExistingDraftOrder: always(Promise.resolve(order)),
    createNewDraftOrder: createDraftOrder,
    saveOrder: orderSetter,
    getPickUpTask: createPickUpTaskFromFoodFormFieldsFactory({
      fields: formFields,
    }),
    getDeliveryTask: createDeliveryTaskFromFoodFormFieldsFactory({
      fields: formFields,
    }),
  });
};

With the previous function we can invoke the use case in the following way:

attachFoodDeliveryTasks(order, save, formFields)
  .then((order) => {
    // Handle success
  })
  .catch((error) => {
    // Handle error
  });
 */

type ProviderFactoryParams = {
  order: Order | undefined | null;
  save: (order: Order) => void;
  getValues: UseFormGetValues<FoodFormFieldValues>;
};

function providerFactory({
  order,
  save,
  getValues,
}: ProviderFactoryParams): AttachFoodDeliveryTasksRepository {
  const formFields = getValues();

  return {
    getExistingDraftOrder: always(Promise.resolve(order ?? undefined)),
    createNewDraftOrder: createDraftOrder,
    saveOrder: setOrderWithSyncSetterFactory({
      orderSetter: save,
    }),
    getPickUpTask: createPickUpTaskFromFoodFormFieldsFactory({
      fields: formFields,
    }),
    getDeliveryTask: createDeliveryTaskFromFoodFormFieldsFactory({
      fields: formFields,
    }),
  };
}

const useAttachFoodDeliveryTask = createInvokeBusinessHook(
  attachFoodDeliveryTasksUC,
  providerFactory
);

function Page(): JSX.Element {
  const navigate = useNavigate();

  const { order, save } = useCurrentOrder();
  const { getValues, handleSubmit, control } = useFoodForm();
  const { state, invoke: attachFoodDeliveryTask } = useAttachFoodDeliveryTask({
    order,
    save,
    getValues,
  });

  useEffect(() => {
    if (state.status === 'success') {
      navigate('/summary');
    }
    // TODO: Add UI error handling using state.status === 'error' and state.errors
  }, [navigate, state]);

  return (
    <NarrowStack title="COMIDA">
      <FoodForm
        control={control}
        onSubmit={handleSubmit(() => attachFoodDeliveryTask())}
      />
    </NarrowStack>
  );
}

export const FoodPage = withAuth(Page);
