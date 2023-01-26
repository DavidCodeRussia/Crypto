export type TProfileStatusProps = {
  status: string;
  fullName: string;
  match: boolean;

  updateStatus: (status: string) => void;
};

export type TProfileStatusState = {};
