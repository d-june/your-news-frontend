import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AuthPopup from "@/components/AuthPopup/AuthPopup";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Header = () => {
  const [authVisible, setAuthVisible] = React.useState(false);

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  return (
    <header className={styles.headerWrapper}>
      <Link href="/">
        <div className={styles.headerLogo}>Your news</div>
      </Link>
      <label htmlFor="search" className={styles.headerSearch}>
        <SearchOutlinedIcon />
        <input id="search" placeholder="Поиск..." autoComplete="off" />
      </label>
      <Link href="/write">
        <Button
          color="primary"
          variant="outlined"
          size="large"
          className={styles.headerButton}
        >
          Новая запись
        </Button>
      </Link>
      <div className={styles.headerRight}>
        <IconButton className={styles.iconButton}>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <Button
          variant="contained"
          onClick={openAuthDialog}
          className={styles.headerLogin}
          size="large"
        >
          <AccountCircleOutlinedIcon /> Войти
        </Button>
        {/*<Link href="#">*/}
        {/*  <Avatar*/}
        {/*    */}
        {/*    className={styles.headerAvatar}*/}
        {/*    src="https://media.istockphoto.com/id/454995205/photo/white-kitten.jpg?b=1&s=170667a&w=0&k=20&c=4zldIT44NhRFHTRhq4kxFA-I_MfuOfSs_f_4wdD54E4="*/}
        {/*  ></Avatar>*/}
        {/*</Link>*/}
      </div>

      <AuthPopup
        onClose={closeAuthDialog}
        open={authVisible}
        handleClose={closeAuthDialog}
      />
    </header>
  );
};

export default Header;
