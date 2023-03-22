import { Inter } from "next/font/google";
import MainLayout from "@/layouts/MainLayout";
import Post from "@/components/Post/Post";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <Post />
    </MainLayout>
  );
}
