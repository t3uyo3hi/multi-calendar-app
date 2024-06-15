import React from "react";

type AccountFormFooterProps = {
  disabled: boolean;
  text: string;
  icon: React.ReactNode;
  secondaryText: string;
  secondaryIcon?: React.ReactNode; // ここを追加
  onClick: () => void;
};

const AccountFormFooter: React.FC<AccountFormFooterProps> = ({
  disabled,
  text,
  icon,
  secondaryText,
  onClick,
}) => {
  return (
    <div>
      <button disabled={disabled} onClick={onClick}>
        {icon} {text}
      </button>
      <div>{secondaryText}</div>
      <div>{secondaryIcon}</div>
    </div>
  );
};

export default AccountFormFooter;
