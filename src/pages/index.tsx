import { Inter } from "next/font/google";
import MainLayout from "@/layouts/MainLayout";
import Post from "@/components/Post/Post";
import { GetServerSideProps } from "next";
import { wrapper } from "@/redux/store";
import { parseCookies } from "nookies";
import { UserApi } from "@/services/api";
import { setUserData } from "@/redux/slices/user";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <Post />
    </MainLayout>
  );
}
