import { LoginPanel, useInfoModal } from '@presentation/components/organisms';
import { ClearNarrowStack } from '@presentation/components/templates';
import { withAuth } from '@presentation/hoc/with-auth';
import { useAuth } from '@presentation/hooks/use-auth';

const Page = () => {
  const { login } = useAuth();

  const { renderedModal, updateModalState } = useInfoModal();

  return (
    <ClearNarrowStack>
      <LoginPanel
        onLogin={login}
        onInfo={(title, messages) =>
          updateModalState({
            isOpen: true,
            type: 'info',
            title,
            messages,
          })
        }
        onError={(title, messages) =>
          updateModalState({
            isOpen: true,
            type: 'error',
            title,
            messages,
          })
        }
      />
      {renderedModal}
    </ClearNarrowStack>
  );
};

export const LoginPage = withAuth(Page, { isLoginPage: true });
