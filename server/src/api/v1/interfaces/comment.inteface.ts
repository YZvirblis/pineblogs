interface IComment {
  _id: any;
  userID: any;
  text: string;
  date?: Date;
  replies?: IComment[];
}
