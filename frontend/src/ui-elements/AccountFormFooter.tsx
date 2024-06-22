import React from "react";

type AccountFormFooterProps = {
  disabled: boolean;
  text: string;
  icon: React.ReactNode;
  secondaryText?: string;
  secondaryIcon?: React.ReactNode;
  onClick?: () => void;
};

const AccountFormFooter: React.FC<AccountFormFooterProps> = ({
  disabled,
  text,
  icon,
  secondaryText,
  secondaryIcon,
  onClick,
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <button
        type="submit"
        className="btn btn-primary d-flex align-items-center"
        disabled={disabled}
      >
        {icon}
        <span className="ms-2">{text}</span>
      </button>
      {secondaryText && (
        <button
          type="button"
          className="btn btn-link d-flex align-items-center"
          onClick={onClick}
          disabled={disabled}
        >
          {secondaryIcon && <span className="me-2">{secondaryIcon}</span>}
          {secondaryText}
        </button>
      )}
    </div>
  );
};

export default AccountFormFooter;
