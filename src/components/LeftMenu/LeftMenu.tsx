import NewspaperIcon from "@mui/icons-material/Newspaper";
import MailIcon from "@mui/icons-material/Mail";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { FC } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./LeftMenu.module.scss";

const menu = [
  { text: "Лента", icon: <NewspaperIcon />, path: "/" },
  { text: "Сообщения", icon: <MailIcon />, path: "/messages" },
  {
    text: "Подписки",
    icon: <LoyaltyIcon />,
    path: "/subscribes",
  },
  {
    text: "Пользователи",
    icon: <LoyaltyIcon />,
    path: "/users",
  },
];

const LeftMenu: FC = () => {
  const router = useRouter();
  return (
    <div>
      <ul>
        {menu.map((obj) => (
          <li key={obj.path}>
            <Link
              href={obj.path}
              className={
                router.asPath === obj.path
                  ? styles.link + " " + styles.activeLink
                  : styles.link
              }
            >
              {obj.icon}
              {obj.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftMenu;
