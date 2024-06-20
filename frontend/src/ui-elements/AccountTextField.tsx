import React from "react";
import { Controller, Control } from "react-hook-form";

type AccountTextFieldProps = {
  id: string;
  name: string;
  control: Control<any>;
  error?: string;
  type: string;
  label: string;
  secondaryLabel?: string;
  icon: React.ReactNode;
  disabled: boolean;
};

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
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <div className="input-group">
        <span className="input-group-text">{icon}</span>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type={type}
              id={id}
              className={`form-control ${error ? "is-invalid" : ""}`}
              placeholder={secondaryLabel}
              disabled={disabled}
            />
          )}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

export default AccountTextField;
