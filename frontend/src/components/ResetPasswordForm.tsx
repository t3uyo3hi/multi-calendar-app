import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import AccountFormFooter from "./../ui-elements/AccountFormFooter";
import AccountTextField from "./../ui-elements/AccountTextField";
import { supabase } from "../utils/supabaseClient";

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
    <form
      className="d-flex flex-column gap-3 w-100"
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
        icon={<i className="bi bi-person"></i>}
        disabled={isSubmitting}
      />
      <AccountFormFooter
        disabled={isSubmitting}
        text="パスワードを再設定する"
        secondaryText="ログイン画面に戻る"
        icon={<i className="bi bi-send"></i>}
        secondaryIcon={<i className="bi bi-arrow-left"></i>}
        onClick={goBack}
      />
    </form>
  );
};
