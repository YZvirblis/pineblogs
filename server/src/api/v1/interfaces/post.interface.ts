interface IPost {
  userID: any;
  desc?: string;
  images?: string[];
  likes?: string[];
  comments?: IComment[];
  _id: any;
}

export default IPost;
