import { AxiosInstance } from "axios";
import { CommentItemType } from "@/services/api/types";

type CreateCommentDto = {
  postId: number;
  text: string;
};

export const CommentApi = (instance: AxiosInstance) => ({
  async getAllComments(postId: number) {
    const { data } = await instance.get<CommentItemType[]>("/comments", {
      params: { postId },
    });

    return data;
  },
  async createComment(dto: CreateCommentDto) {
    const { data } = await instance.post<
      CreateCommentDto,
      { data: CommentItemType }
    >("/comments", dto);
    return data;
  },
  async removeComment(id: number) {
    return instance.delete("/comments/" + id);
  },
});
