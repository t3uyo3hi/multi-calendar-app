import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Controller, Control } from "react-hook-form";

interface AccountTextFieldProps {
  id: string;
  name: string;
  control: Control<any>;
  type: string;
  label: string;
  secondaryLabel?: string;
  icon?: React.ReactNode;
  error?: string;
  disabled?: boolean;
}

const AccountTextField: React.FC<AccountTextFieldProps> = ({
  id,
  name,
  control,
  type,
  label,
  secondaryLabel,
  icon,
  error,
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
          fullWidth
          InputProps={{
            startAdornment: icon ? (
              <InputAdornment position="start">{icon}</InputAdornment>
            ) : null,
          }}
        />
      )}
    />
  );
};

export default AccountTextField;
