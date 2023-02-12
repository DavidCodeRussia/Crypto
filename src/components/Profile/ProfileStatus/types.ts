export type TProfileStatusProps = {
  status: string;
  fullName: string;
  match: { params: { userId: string | null } };

  updateStatus: (status: string) => void;
};

export type TProfileStatusState = {};
