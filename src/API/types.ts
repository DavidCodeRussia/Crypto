export type TGetPhoto = {
  image: File;
};

export type TAuthData = {
  id: number;
  email: string;
  login: string;
};

export type TAuthMe = {
  data: TAuthData;
  resultCode: number;
  messages: string[];
};

export type TAuthLogin = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: boolean;
};
