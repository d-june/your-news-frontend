import { OutputData } from "@editorjs/editorjs";

export type LoginDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  fullName: string;
} & LoginDto;

export type ResponseUser = {
  createdAt: string;
  email: string;
  fullName: string;
  id: number;
  commentsCount?: number;
  comments?: CommentItemType[];
  token: string;
  updatedAt: string;
};

export type PostItem = {
  title: string;
  body: OutputData["blocks"];
  description: string;
  tags: string | null;
  id: number;
  views: number;
  user: ResponseUser;
  createdAt: string;
  updatedAt: string;
};

export type CommentItemType = {
  id: number;
  text: string;
  post: PostItem;
  user: ResponseUser;
  createdAt: string;
  updatedAt: string;
};
