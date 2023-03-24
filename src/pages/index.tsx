import { Inter } from "next/font/google";
import MainLayout from "@/layouts/MainLayout";
import Post from "@/components/Post/Post";
import { Api } from "@/services/api";
import { NextPage } from "next";
import { PostItem } from "@/services/api/types";

interface HomeProps {
  posts: PostItem[];
}
const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <MainLayout>
      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export const getServerSideProps = async (ctx) => {
  try {
    const posts = await Api().post.getAllPosts();
    return {
      props: {
        posts,
      },
    };
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      posts: null,
    },
  };
};

export default Home;
