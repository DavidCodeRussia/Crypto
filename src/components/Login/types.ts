export type TLoginMapStateToProps = {
  isAuth: boolean;
  captcha: string | null;
};

export type TLoginReduxFormProps = {
  error: string;
  handleSubmit: () => void;
};

export type TLoginReduxFormOwnProps = {
  captcha: string; // этот тип создан для наглядности, чтобы показать возможность применения 2-ух типов к одной компоненте
};

export type TFormData = {
  email: string;
  password: string;
  rememberMe: string;
  captcha: string;
};

export type TLoginMapDispatchToProps = {
  login: (email: string, password: string, rememberMe: string, captcha: string) => void;
};
