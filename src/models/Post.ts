interface Post {
  id: number;
  postDate: string;
  url: string;
  description: string;
  allowComments: boolean;
  likes: number;
  comments: number;
  userId: number;
  userName: string;
  userURL: string;
  comentarios: Comentario[];
}
