import React, { FC, useState } from "react";
import { Alert, Button, TextField } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "@/components/utils/schemas/formsValidation";
import FormField from "@/components/FormField";
import styles from "@/components/AuthPopup/AuthPopup.module.scss";
import { CreateUserDto, LoginDto } from "@/services/api/types";
import { UserApi } from "@/services/api/user";
import { setCookie } from "nookies";
import { useAppDispatch } from "@/redux/hooks";
import { setUserData } from "@/redux/slices/user";
import { Api } from "@/services/api/index";

interface LoginFormProps {
  onClickRegister: () => void;
}
const Login: FC<LoginFormProps> = ({ onClickRegister }) => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = async (dto: LoginDto) => {
    try {
      const data = await Api().user.login(dto);
      setCookie(null, "_token", data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      setErrorMessage("");
      dispatch(setUserData(data));
    } catch (err) {
      console.warn("Ошибка при регистрации", err);
      if (err.response) {
        setErrorMessage(err.response.data.message);
      }
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className={styles.popupFields}>
            <FormField name="email" label="Email" />
            <FormField name="password" label="Пароль" />
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          </div>
          <div className={styles.popupBottom}>
            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
              variant="contained"
            >
              Войти
            </Button>
            <Button onClick={onClickRegister} variant="outlined">
              Зарегистрироваться
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Login;
