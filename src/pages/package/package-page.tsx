import { PackageForm } from '@presentation/components/organisms';
import { NarrowStack } from '@presentation/components/templates';
import { withAuth } from '@presentation/hoc/with-auth';
import type { FieldValues } from 'react-hook-form';

function Page(): JSX.Element {
  const onSubmit = (formData: FieldValues) => {
    console.log('FORM DATA: ', formData);
  };

  return (
    <NarrowStack title="PAQUETERÍA">
      <PackageForm onSubmit={onSubmit} />
    </NarrowStack>
  );
}

export const PackagePage = withAuth(Page);
