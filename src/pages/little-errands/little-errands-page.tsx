import type { Order } from '@domain/entities';
import type { AttachSimpleDeliveryTasksRepository } from '@domain/repositories';
import { attachSimpleDeliveryTasksUC } from '@domain/use-cases/attach-simple-delivery-tasks';
import { createDeliveryTaskFromLittleErrandsFormFieldsFactory } from '@implementation/adapters/create-delivery-task-from-little-errands-form-fields';
import { createDraftOrder } from '@implementation/adapters/create-draft-order';
import { createPickUpTaskFromLittleErrandsFormFieldsFactory } from '@implementation/adapters/create-pick-up-task-from-little-errands-form-fields';
import { setOrderWithSyncSetterFactory } from '@implementation/adapters/set-order-with-sync-setter';
import type { LittleErrandsFormFieldValues } from '@presentation/components/organisms';
import {
  LittleErrandsForm,
  useLittleErrandsForm,
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
  getValues: UseFormGetValues<LittleErrandsFormFieldValues>;
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
    getPickUpTask: createPickUpTaskFromLittleErrandsFormFieldsFactory({
      fields: formFields,
    }),
    getDeliveryTask: createDeliveryTaskFromLittleErrandsFormFieldsFactory({
      fields: formFields,
    }),
  };
}

const useAttachLittleErrandsDeliveryTask = createInvokeBusinessHook(
  attachSimpleDeliveryTasksUC,
  providerFactory
);

function Page(): JSX.Element {
  const navigate = useNavigate();

  const { order, save } = useCurrentOrder();
  const { getValues, handleSubmit, control } = useLittleErrandsForm();
  const { state, invoke: attachLittleErrandsDeliveryTask } =
    useAttachLittleErrandsDeliveryTask({
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
    <NarrowStack title="MANDADITO">
      <LittleErrandsForm
        control={control}
        onSubmit={handleSubmit(() => attachLittleErrandsDeliveryTask())}
      />
    </NarrowStack>
  );
}

export const LittleErrandsPage = withAuth(Page);
