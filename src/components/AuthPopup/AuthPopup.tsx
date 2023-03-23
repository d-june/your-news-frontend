import React, { FC, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import styles from "./AuthPopup.module.scss";
import Main from "@/components/AuthPopup/Main";
import Login from "@/components/AuthPopup/Login";
import Register from "@/components/AuthPopup/Register";

interface AuthPopupProps {
  onClose: () => void;
  open: boolean;
  handleClose: () => void;
}

const AuthPopup: FC<AuthPopupProps> = ({ onClose, open, handleClose }) => {
  const [formType, setFormType] = useState<"main" | "login" | "register">(
    "main"
  );

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent>
        <DialogTitle variant="h4" align="center">
          {formType === "main" ? (
            "Войти"
          ) : (
            <Typography
              variant="h5"
              className={styles.popupTitleAuthorization}
              onClick={() => setFormType("main")}
            >
              <ArrowBackIcon />к авторизации
            </Typography>
          )}
        </DialogTitle>
        {formType === "main" && (
          <Main onClickLoginEmail={() => setFormType("login")} />
        )}
        {formType === "login" && (
          <Login onClickRegister={() => setFormType("register")} />
        )}
        {formType === "register" && (
          <Register onClickLoginEmail={() => setFormType("login")} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthPopup;
