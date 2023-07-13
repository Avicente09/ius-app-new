import type { Order } from '@domain/entities';
import type { AttachDeliveryTasksWithPaymentRetrievalRepository } from '@domain/repositories';
import { attachDeliveryTasksWithPaymentRetrievalUC } from '@domain/use-cases/attach-delivery-tasks-with-payment-retrieval';
import { createDeliveryTaskFromPackageFormFieldsFactory } from '@implementation/adapters/create-delivery-task-from-package-form-fields';
import { createDraftOrder } from '@implementation/adapters/create-draft-order';
import { createPaymentRetrievalTaskFromPackageFormFieldsFactory } from '@implementation/adapters/create-payment-retrieval-task-from-package-form-fields';
import { createPickUpTaskFromPackageFormFieldsFactory } from '@implementation/adapters/create-pick-up-task-from-package-form-fields';
import { setOrderWithSyncSetterFactory } from '@implementation/adapters/set-order-with-sync-setter';
import type { PackageFormFieldValues } from '@presentation/components/organisms';
import {
  PackageForm,
  usePackageForm,
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
  order: Order | undefined | null;
  save: (order: Order) => void;
  getValues: UseFormGetValues<PackageFormFieldValues>;
};

function providerFactory({
  order,
  save,
  getValues,
}: ProviderFactoryParams): AttachDeliveryTasksWithPaymentRetrievalRepository {
  const formFields = getValues();

  return {
    getExistingDraftOrder: always(Promise.resolve(order ?? undefined)),
    createNewDraftOrder: createDraftOrder,
    saveOrder: setOrderWithSyncSetterFactory({
      orderSetter: save,
    }),
    getPickUpTask: createPickUpTaskFromPackageFormFieldsFactory({
      fields: formFields,
    }),
    getDeliveryTask: createDeliveryTaskFromPackageFormFieldsFactory({
      fields: formFields,
    }),
    getPaymentRetrievalTask:
      createPaymentRetrievalTaskFromPackageFormFieldsFactory({
        fields: formFields,
      }),
  };
}

const useAttachPackageDeliveryTask = createInvokeBusinessHook(
  attachDeliveryTasksWithPaymentRetrievalUC,
  providerFactory
);

function Page(): JSX.Element {
  const navigate = useNavigate();

  const { order, save } = useCurrentOrder();
  const { getValues, handleSubmit, control } = usePackageForm();
  const { state, invoke: attachPackageDeliveryTask } =
    useAttachPackageDeliveryTask({
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
    <NarrowStack title="PAQUETERÍA">
      <PackageForm
        control={control}
        onSubmit={handleSubmit(() => attachPackageDeliveryTask())}
      />
    </NarrowStack>
  );
}

export const PackagePage = withAuth(Page);
