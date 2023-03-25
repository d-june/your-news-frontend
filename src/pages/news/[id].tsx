import MainLayout from "@/layouts/MainLayout";
import { GetServerSideProps, NextPage } from "next";
import { Api } from "@/services/api";
import { PostItem } from "@/services/api/types";
import FullPost from "@/components/FullPost/FullPost";
import PostComments from "@/components/PostComments/PostComments";

interface FullPostPageProps {
  post: PostItem;
}
const FullPostPage: NextPage<FullPostPageProps> = ({ post }) => {
  return (
    <MainLayout contentFullWidth>
      <div>
        <FullPost title={post.title} blocks={post.body} />
        <PostComments postId={post.id} />
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const id = ctx.params.id;
    const post = await Api(ctx).post.getOnePost(+id);

    return {
      props: {
        post,
      },
    };
  } catch (err) {
    console.log("Full post page", err);
    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default FullPostPage;
