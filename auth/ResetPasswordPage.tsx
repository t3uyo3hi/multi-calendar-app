import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useIsLocationState } from "./hooks/useIsLocationState";
import { loginInputSchema } from "./types/LoginFormInput";

import { ResetPasswordForm } from "./types/ResetPasswordForm";

export const ResetPasswordPage = () => {
  useIsLocationState("/login");

  const emailSchema = z.object({
    email: loginInputSchema.shape.email,
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isSubmitSuccessful, errors },
    reset,
  } = useForm<{ email: string }>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "32px",
        width: "100%",
      }}
    >
      <Typography variant="h4" align="left">
        パスワード再設定
      </Typography>
      {isSubmitSuccessful ? (
        <Typography variant="body1">
          パスワードの再設定URLを送信しました。メールをご確認ください。
        </Typography>
      ) : (
        <ResetPasswordForm
          handleSubmit={handleSubmit}
          control={control}
          isSubmitting={isSubmitting}
          errors={errors}
          reset={reset}
        />
      )}
    </Box>
  );
};
