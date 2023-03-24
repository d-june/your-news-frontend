import React from "react";
import MainLayout from "@/layouts/MainLayout";
import WriteForm from "@/components/WriteForm/WriteForm";
import { GetServerSideProps, NextPage } from "next";
import { Api } from "@/services/api";

const WritePage: NextPage = () => {
  return (
    <MainLayout hideComments hideMenu>
      <WriteForm />
    </MainLayout>
  );
};

export default WritePage;
