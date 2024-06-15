import { zodResolver } from "@hookform/resolvers/zod";
import DoneIcon from "@mui/icons-material/Done";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import AccountFormFooter from "../ui-elements/AccountFormFooter";
import AccountTextField from "../ui-elements/AccountTextField";
import { supabase } from "../utils/supabase";
import { resetPasswordFormInputSchema } from "./ResetPasswordInputForm";

import type { ResetPasswordForm } from "./ResetPasswordForm";
import type { SubmitHandler } from "react-hook-form";

export const ResetPasswordInputForm = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<ResetPasswordFormInput>({
    resolver: zodResolver(resetPasswordFormInputSchema),
    defaultValues: { password: "", passwordConfirmation: "" },
  });

  const onSubmit: SubmitHandler<ResetPasswordFormInput> = async (data) => {
    try {
      const { password, passwordConfirmation } = data;

      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      navigate("/login", {
        state: { referrer: "login" },
      });
    } catch (err) {
      console.log(err);
    } finally {
      reset();
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        width: "100%",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <AccountTextField
        id="password"
        name="password"
        control={control}
        error={errors.password?.message}
        type="password"
        label="新規パスワード"
        secondaryLabel="パスワードを入力..."
        icon={<LockOutlinedIcon />}
        disabled={isSubmitting}
      />
      <AccountTextField
        id="passwordConfirmation"
        name="passwordConfirmation"
        control={control}
        error={errors.passwordConfirmation?.message}
        type="password"
        label="新規パスワード確認"
        secondaryLabel="パスワードをもう一度入力..."
        icon={<LockOutlinedIcon />}
        disabled={isSubmitting}
      />
      <AccountFormFooter
        disabled={isSubmitting}
        text="パスワードを設定"
        icon={<DoneIcon />}
      />
    </Box>
  );
};
