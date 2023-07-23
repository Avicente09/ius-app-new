import type { Order } from '@domain/entities';
import type { AttachSimpleDeliveryTasksRepository } from '@domain/repositories';

import { attachSimpleDeliveryTasksUC } from '@domain/use-cases/attach-simple-delivery-tasks';
import { createDeliveryTaskFromPurchaseFormFieldsFactory } from '@implementation/adapters/create-delivery-task-from-purchase-form-fields';
import { createDraftOrder } from '@implementation/adapters/create-draft-order';
import { createPickUpTaskFromPurchaseFormFieldsFactory } from '@implementation/adapters/create-pick-up-task-from-purchase-form-fields';
import { setOrderWithSyncSetterFactory } from '@implementation/adapters/set-order-with-sync-setter';
import type { PurchaseFormFieldValues } from '@presentation/components/organisms';
import {
  PurchaseForm,
  usePurchaseForm,
} from '@presentation/components/organisms';
import { NarrowStack } from '@presentation/components/templates';
import { withAuth } from '@presentation/hoc/with-auth';
import { useCurrentOrder } from '@presentation/hooks/use-current-order';
import { createInvokeBusinessHook } from '@utils/business/create-invoke-business-hook';
import { always } from 'ramda';
import { useEffect } from 'react';
import type { UseFormGetValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type ProviderFactoryParams = {
  order: Order | undefined;
  save: (order: Order) => void;
  getValues: UseFormGetValues<PurchaseFormFieldValues>;
};

function providerFactory({
  order,
  save,
  getValues,
}: ProviderFactoryParams): AttachSimpleDeliveryTasksRepository {

  const formFields = getValues();

  return {
    getExistingDraftOrder: always(Promise.resolve(order)),
    createNewDraftOrder: createDraftOrder,
    saveOrder: setOrderWithSyncSetterFactory({
      orderSetter: save,
    }),
    getPickUpTask: createPickUpTaskFromPurchaseFormFieldsFactory({
      fields: formFields,
    }),
    getDeliveryTask: createDeliveryTaskFromPurchaseFormFieldsFactory({
      fields: formFields,
    }),
  };
}

const useAttachPurchaseDeliveryTask = createInvokeBusinessHook(
  attachSimpleDeliveryTasksUC,
  providerFactory
);

function Page(): JSX.Element {
  const navigate = useNavigate();

  const { order, save } = useCurrentOrder();
  const { getValues, handleSubmit, control } = usePurchaseForm();
  const { state, invoke: attachPurchaseDeliveryTask } =
    useAttachPurchaseDeliveryTask({
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
    <NarrowStack title="COMPRA">
      <PurchaseForm
        control={control}
        onSubmit={handleSubmit(() => attachPurchaseDeliveryTask())}
      />
    </NarrowStack>
  );
}

export const PurchasePage = withAuth(Page);
