
export interface IAccount {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  passwordResetToken: string;
  passwordResetExpires: Date;
  facebook: string;

  profile: {
    name: string,
    gender: string,
    location: string,
    website: string,
    picture: string
  };
}

