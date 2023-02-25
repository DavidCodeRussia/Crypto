import { PathMatch } from 'react-router-dom';

export type TProfileStatusProps = {
  status: string;
  fullName: string;
  match: PathMatch<'userId'> | null;

  updateStatus: (status: string) => void;
};

export type TProfileStatusState = {};
