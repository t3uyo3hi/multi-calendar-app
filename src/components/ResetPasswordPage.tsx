import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useIsLocationState } from "../hooks/useIsLocationState";
import { loginInputSchema } from "./../types/LoginFormInput";

import { ResetPasswordForm } from "./ResetPasswordForm";

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
    <div className="d-flex flex-column align-items-start gap-3 w-100">
      <h4 className="text-start">パスワード再設定</h4>
      {isSubmitSuccessful ? (
        <p>パスワードの再設定URLを送信しました。メールをご確認ください。</p>
      ) : (
        <ResetPasswordForm
          handleSubmit={handleSubmit}
          control={control}
          isSubmitting={isSubmitting}
          errors={errors}
          reset={reset}
        />
      )}
    </div>
  );
};
