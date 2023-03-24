import React from "react";
import MainLayout from "@/layouts/MainLayout";
import WriteForm from "@/components/WriteForm/WriteForm";
import { GetServerSideProps, NextPage } from "next";
import { Api } from "@/services/api";
import { PostItem } from "@/services/api/types";

interface WritePageProps {
  post: PostItem;
}
const WritePage: NextPage<WritePageProps> = ({ post }) => {
  return (
    <MainLayout hideComments hideMenu>
      <WriteForm data={post} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const id = ctx.params.id;
    const post = await Api(ctx).post.getOnePost(+id);
    const user = await Api(ctx).user.getMe();

    if (post.user.id !== user.id) {
      return {
        props: {},
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return {
      props: {
        post,
      },
    };
  } catch (err) {
    console.log("WritePage", err);
    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default WritePage;
