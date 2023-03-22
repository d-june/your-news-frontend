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

interface AuthPopupProps {
  onClose: () => void;
  open: boolean;
  handleClose: () => void;
}

const AuthPopup: FC<AuthPopupProps> = ({ onClose, open, handleClose }) => {
  const [formType, setFormType] = useState<"main" | "email">("main");

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle className={styles.popupTitle} align="center">
        {formType === "main" ? (
          "Войти"
        ) : (
          <Typography onClick={() => setFormType("main")}>
            <ArrowBackIcon />
            Войти через почту
          </Typography>
        )}
      </DialogTitle>
      <DialogContent>
        {formType === "main" && (
          <DialogContentText className={styles.popupContent}>
            <div>
              <Button fullWidth variant="outlined">
                ВКонтакте
              </Button>
              <Button fullWidth variant="outlined">
                Google
              </Button>
              <Button
                onClick={() => setFormType("email")}
                fullWidth
                variant="outlined"
              >
                Через почту
              </Button>
            </div>
            <div className={styles.bottomButtons}>
              <Button variant="outlined">Twitter</Button>
              <Button variant="outlined">Facebook</Button>
              <Button variant="outlined">Apple</Button>
            </div>
          </DialogContentText>
        )}
        {formType === "email" && (
          <div>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Пароль"
              type="password"
              fullWidth
              variant="standard"
            />
            <Button variant="contained">Войти</Button>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AuthPopup;
