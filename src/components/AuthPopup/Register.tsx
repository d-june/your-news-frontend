import React, { FC } from "react";
import { Button, TextField } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  LoginFormSchema,
  RegisterFormSchema,
} from "@/components/utils/schemas/formsValidation";
import FormField from "@/components/FormField";
import styles from "@/components/AuthPopup/AuthPopup.module.scss";

interface RegisterProps {
  onClickLoginEmail: () => void;
}
const Register: FC<RegisterProps> = ({ onClickLoginEmail }) => {
  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = (data: any) => console.log(data);
  return (
    <FormProvider {...form}>
      <div className={styles.popupFields}>
        <FormField name="fullname" label="Имя и фамилия" />
        <FormField name="email" label="Email" />
        <FormField name="password" label="Пароль" />
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={styles.popupBottom}>
          <Button type="submit" variant="contained">
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
