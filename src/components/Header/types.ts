export type TMapStateToProps = {
  isAuth: boolean;
  login: string | null;
};

export type TMapDispatchToProps = {
  logout: () => void;
};

export type THeader = TMapStateToProps & TMapDispatchToProps;
