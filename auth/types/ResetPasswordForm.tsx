import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import AccountFormFooter from "../ui-elements/AccountFormFooter";
import AccountTextField from "../ui-elements/AccountTextField";
import { supabase } from "../utils/supabase";

import type {
  Control,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormReset,
} from "react-hook-form";

type Props = {
  handleSubmit: UseFormHandleSubmit<{ email: string }>;
  control: Control<{ email: string }>;
  isSubmitting: boolean;
  errors: FieldErrors<{ email: string }>;
  reset: UseFormReset<{ email: string }>;
};

export const ResetPasswordForm: React.FC<Props> = ({
  handleSubmit,
  control,
  isSubmitting,
  errors,
  reset,
}) => {
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSubmit: SubmitHandler<{ email: string }> = async (data) => {
    const { email } = data;
    const token = uuidv4();

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset_password/${token}`,
      });

      if (error) {
        throw new Error(error.message);
      }
      alert("パスワード再設定メールを送信しました。メールを確認してください。");
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
        id="email"
        name="email"
        control={control}
        error={errors.email?.message}
        type="text"
        label="メールアドレス"
        secondaryLabel="メールアドレスを入力..."
        icon={<PersonOutlineOutlinedIcon />}
        disabled={isSubmitting}
      />
      <AccountFormFooter
        disabled={isSubmitting}
        text="パスワードを再設定する"
        secondaryText="ログイン画面に戻る"
        icon={<SendIcon />}
        secondaryIcon={<ArrowBackIcon />}
        onClick={goBack}
      />
    </Box>
  );
};
