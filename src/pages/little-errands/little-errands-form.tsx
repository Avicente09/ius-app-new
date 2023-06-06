import Typography from '@mui/material/Typography';
import { LittleErrandsForm } from '@presentation/components/organisms';
import { NarrowStack } from '@presentation/components/templates';
import { withAuth } from '@presentation/hoc/with-auth';
import type { FieldValues } from 'react-hook-form';

function Page(): JSX.Element {
  const onSubmit = (formData: FieldValues) => {
    console.log('FORM DATA: ', formData);
  };

  return (
    <NarrowStack title="MANDADITOS">
      <Typography align="center" variant="h6">
        Detalla lo más específico posible.
      </Typography>
      <LittleErrandsForm onSubmit={onSubmit} />
    </NarrowStack>
  );
}

export const LittleErrandsPage = withAuth(Page);
