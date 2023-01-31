interface IPost {
  userID: any;
  desc?: string;
  images?: string[];
  likes?: any[];
  comments?: IComment[];
  tags?: string[]
  _id: any;
}

export default IPost;
