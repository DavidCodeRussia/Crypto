export type TContacts = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type TProfile = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: TContacts;
  aboutMe: string;
  photos: TPhotos;
};

export type TPosts = {
  id: number;
  message: string;
  likes: number;
};

export type TPhotos = {
  small: string;
  large: string;
};
