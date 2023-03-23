import React, { FC } from "react";
import { Button, TextField } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "@/components/utils/schemas/formsValidation";
import FormField from "@/components/FormField";
import styles from "@/components/AuthPopup/AuthPopup.module.scss";

interface LoginFormProps {
  onClickRegister: () => void;
}
const Login: FC<LoginFormProps> = ({ onClickRegister }) => {
  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <FormProvider {...form}>
        <div className={styles.popupFields}>
          <FormField name="email" label="Email" />
          <FormField name="password" label="Пароль" />
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className={styles.popupBottom}>
            <Button type="submit" variant="contained">
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
