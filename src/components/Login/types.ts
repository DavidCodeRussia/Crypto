export type TLoginMapStateToProps = {
  isAuth: boolean;
  captcha: string | null;
};

export type TLoginMapDispatchToProps = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void;
};

export type TLoginProps = TLoginMapStateToProps & TLoginMapDispatchToProps;

export type TLoginReduxFormProps = {
  error: string;
  onSubmit: () => void;
};

export type TLoginReduxFormOwnProps = {
  captcha: string | null; // этот тип создан для наглядности, чтобы показать возможность применения 2-ух типов к одной компоненте
};

export type TFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};
