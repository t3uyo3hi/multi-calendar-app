import React from "react";
import { Button, Box, Typography } from "@mui/material";

interface AccountFormFooterProps {
  disabled: boolean;
  text: string;
  icon: React.ReactNode;
  secondaryText?: string;
  onClick?: () => void;
  secondaryIcon?: React.ReactNode;
}

export const AccountFormFooter: React.FC<AccountFormFooterProps> = ({
  disabled,
  text,
  icon,
  secondaryText,
  onClick,
  secondaryIcon,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={disabled}
        startIcon={icon}
        fullWidth
      >
        {text}
      </Button>
      {secondaryText && onClick && (
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={onClick}
        >
          {secondaryIcon}
          <Typography variant="body2" color="primary" sx={{ ml: 1 }}>
            {secondaryText}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default AccountFormFooter;
