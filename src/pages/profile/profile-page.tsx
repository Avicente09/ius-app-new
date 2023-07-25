import { ProfileForm } from '@presentation/components/organisms/profile-form';
import { NarrowStack } from '@presentation/components/templates';
import { withAuth } from '@presentation/hoc/with-auth';
import type { FieldValues } from 'react-hook-form';

function Page(): JSX.Element {
  const onSubmit = (formData: FieldValues) => {
    console.log('FORM DATA: ', formData);
  };

  return (
    <NarrowStack title="Perfil de Usuario">
      <ProfileForm onSubmit={onSubmit} />
    </NarrowStack>
  );
}

export const ProfilePage = withAuth(Page);
