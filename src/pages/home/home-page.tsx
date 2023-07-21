import { MainMenu } from '@presentation/components/organisms';
import { NarrowStack } from '@presentation/components/templates';
import { withAuth } from '@presentation/hoc/with-auth';
import { useTermsAndConditionsModal } from '@presentation/hooks/use-terms-and-conditions-modal';

function Page(): JSX.Element {
  const { renderedModal } = useTermsAndConditionsModal();

  return (
    <NarrowStack title="SERVICIOS">
      <MainMenu />
      {renderedModal}
    </NarrowStack>
  );
}

export const HomePage = withAuth(Page);
