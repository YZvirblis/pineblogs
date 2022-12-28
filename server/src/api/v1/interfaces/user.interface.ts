interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  profilePicture?: string;
  coverPicture?: string;
  followers?: string[];
  followingUsers?: string[];
  followingTags?: string[];
  isAdmin?: boolean;
  description: string;
  location: string;
  relationship: number;
  _id: any;
}

export default IUser;
