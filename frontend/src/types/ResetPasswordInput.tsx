import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AccountFormFooter from "../ui-elements/AccountFormFooter";
import AccountTextField from "../ui-elements/AccountTextField";
import { supabase } from "../utils/supabaseClient";
import { resetPasswordFormInputSchema } from "../types/ResetPasswordFormInput";

import type { ResetPasswordFormInput } from "../types/ResetPasswordFormInput";
import type { SubmitHandler } from "react-hook-form";

const ResetPasswordInputForm: React.FC = () => {
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

      if (password !== passwordConfirmation) {
        console.error("パスワードが一致しません");
        return;
      }

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
    <form
      className="d-flex flex-column gap-3 w-100"
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
        icon={<i className="bi bi-lock"></i>}
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
        icon={<i className="bi bi-lock"></i>}
        disabled={isSubmitting}
      />
      <AccountFormFooter
        disabled={isSubmitting}
        text="パスワードを設定"
        icon={<i className="bi bi-check"></i>}
      />
    </form>
  );
};

export default ResetPasswordInputForm;
