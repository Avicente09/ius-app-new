import Typography from '@mui/material/Typography';
import { PurchaseForm } from '@presentation/components/organisms';
import { NarrowStack } from '@presentation/components/templates';
import { withAuth } from '@presentation/hoc/with-auth';
import type { FieldValues } from 'react-hook-form';

function Page(): JSX.Element {
  const onSubmit = (formData: FieldValues) => {
    console.log('FORM DATA: ', formData);
  };

  return (
    <NarrowStack title="COMPRA">
      <Typography align="center" variant="h6">
        Detalla lo más específico posible.
      </Typography>
      <PurchaseForm onSubmit={onSubmit} />
    </NarrowStack>
  );
}

export const PurchasePage = withAuth(Page);
