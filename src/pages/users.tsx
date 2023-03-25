import React from "react";
import MainLayout from "@/layouts/MainLayout";
import { Api } from "@/services/api";
import { NextPage } from "next";
import { ResponseUser } from "@/services/api/types";

interface UsersPageProps {
  users: ResponseUser[];
}

const UsersPage: NextPage<UsersPageProps> = ({ users }) => {
  return (
    <MainLayout>
      <div>
        {users.map((user) => {
          return (
            <div>
              <div
                style={{
                  marginBottom: "20px",
                  border: "1px solid black",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div>Пользователь {user.id}</div>
                <div>{user.fullName}</div>
                Количество комментариев: {user.commentsCount}
                {user.comments?.length > 0 && (
                  <div style={{ marginTop: "10px" }}>
                    Комментарии юзера:
                    {user.comments.map((comment) => {
                      return <li>- {comment.text}</li>;
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
};

export const getServerSideProps = async () => {
  try {
    const users = await Api().user.getAll();
    return {
      props: {
        users,
      },
    };
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      users: null,
    },
  };
};
export default UsersPage;
