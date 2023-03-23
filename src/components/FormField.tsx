import React, { FC } from "react";
import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface FormFieldProps {
  name: string;
  label: string;
}
const FormField: FC<FormFieldProps> = ({ name, label }) => {
  const { register, formState } = useFormContext();
  return (
    <TextField
      {...register(name)}
      name={name}
      autoFocus
      margin="dense"
      label={label}
      error={!!formState.errors[name]?.message}
      helperText={formState.errors[name]?.message}
      fullWidth
      variant="outlined"
    />
  );
};

export default FormField;
