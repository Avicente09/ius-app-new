export interface UserLoginInfo {
  id: string;
  name: string;
  email: string;
}

export interface LoginPanelProps {
  onLogin: (userLoginInfo: UserLoginInfo) => void;
  onError: (subject: string, messages: string[]) => void;
  onInfo: (subject: string, messages: string[]) => void;
}
