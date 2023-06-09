import { AxiosInstance } from "axios";
import {
  CreateUserDto,
  LoginDto,
  PostItem,
  ResponseUser,
} from "@/services/api/types";
import { OutputData } from "@editorjs/editorjs";

type CreatePostDto = {
  title: string;
  body: OutputData["blocks"];
};

export const PostApi = (instance: AxiosInstance) => ({
  async getAllPosts() {
    const { data } = await instance.get<PostItem[]>("/posts");
    return data;
  },
  async getOnePost(id: number) {
    const { data } = await instance.get<PostItem>(`/posts/${id}`);
    return data;
  },
  async createPost(dto: CreatePostDto) {
    const { data } = await instance.post<CreatePostDto, { data: PostItem }>(
      "/posts",
      dto
    );
    return data;
  },
  async updatePost(id: number, dto: CreatePostDto) {
    const { data } = await instance.patch<CreatePostDto, { data: PostItem }>(
      `/posts/${id}`,
      dto
    );
    return data;
  },
});
