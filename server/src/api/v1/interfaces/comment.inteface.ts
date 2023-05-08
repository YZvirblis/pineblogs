interface IComment {
  _id: any;
  userID: any;
  username: string;
  postID:any;
  text: string;
  date?: Date;
}

export default IComment;

