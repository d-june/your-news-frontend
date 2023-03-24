import React, { FC, useState } from "react";
import { setCookie } from "nookies";
import { Alert, Button, TextField } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  LoginFormSchema,
  RegisterFormSchema,
} from "@/components/utils/schemas/formsValidation";
import FormField from "@/components/FormField";
import styles from "@/components/AuthPopup/AuthPopup.module.scss";
import { CreateUserDto } from "@/services/api/types";
import { UserApi } from "@/services/api/user";

interface RegisterProps {
  onClickLoginEmail: () => void;
}
const Register: FC<RegisterProps> = ({ onClickLoginEmail }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const data = await UserApi.register(dto);
      setCookie(null, "authToken", data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      setErrorMessage("");
    } catch (err) {
      console.warn("Ошибка при регистрации", err);
      if (err.response) {
        setErrorMessage(err.response.data.message);
      }
    }
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={styles.popupFields}>
          <FormField name="fullName" label="Имя и фамилия" />
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
            Зарегистрироваться
          </Button>
          <Button variant="outlined" onClick={onClickLoginEmail}>
            Войти
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Register;
