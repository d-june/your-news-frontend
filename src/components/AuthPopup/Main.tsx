import React, { FC } from "react";
import styles from "@/components/AuthPopup/AuthPopup.module.scss";
import { Button, DialogContentText } from "@mui/material";

import VkIcon from "../../assets/img/icons/vk.svg";
import GoogleIcon from "../../assets/img/icons/google.svg";
import MailIcon from "../../assets/img/icons/mail.svg";
import TwitterIcon from "../../assets/img/icons/twitter.svg";
import FacebookIcon from "../../assets/img/icons/facebook.svg";
import AppleIcon from "../../assets/img/icons/apple.svg";

interface MainFormProps {
  onClickLoginEmail: () => void;
}
const Main: FC<MainFormProps> = ({ onClickLoginEmail }) => {
  return (
    <DialogContentText className={styles.popupContent}>
      <div className={styles.popupFields}>
        <Button fullWidth variant="outlined">
          <VkIcon />
          ВКонтакте
        </Button>
        <Button fullWidth variant="outlined">
          <GoogleIcon />
          Google
        </Button>
        <Button onClick={onClickLoginEmail} fullWidth variant="outlined">
          <MailIcon />
          Через почту
        </Button>
      </div>
      <div className={styles.bottomButtons}>
        <Button variant="outlined">
          <TwitterIcon />
        </Button>
        <Button variant="outlined">
          <FacebookIcon />
        </Button>
        <Button variant="outlined">
          <AppleIcon />
        </Button>
      </div>
    </DialogContentText>
  );
};

export default Main;
