import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Controller } from "react-hook-form";

interface AccountTextFieldProps {
  id: string;
  name: string;
  control: any;
  error?: string;
  type: string;
  label: string;
  secondaryLabel: string;
  icon: React.ReactNode;
  disabled: boolean;
}

const AccountTextField: React.FC<AccountTextFieldProps> = ({
  id,
  name,
  control,
  error,
  type,
  label,
  secondaryLabel,
  icon,
  disabled,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          id={id}
          type={type}
          label={label}
          placeholder={secondaryLabel}
          error={!!error}
          helperText={error}
          disabled={disabled}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{icon}</InputAdornment>
            ),
          }}
          fullWidth
        />
      )}
    />
  );
};

export default AccountTextField;
