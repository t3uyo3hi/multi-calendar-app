import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { supabase } from "./../utils/supabaseClient";
import { loginInputSchema } from "./../types/LoginFormInput";
import AccountFormFooter from "../ui-elements/AccountFormFooter";
import AccountTextField from "../ui-elements/AccountTextField";

import type { LoginFormInput } from "./../types/LoginFormInput";
import type { SubmitHandler } from "react-hook-form";

export const LoginForm = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<LoginFormInput>({
    resolver: zodResolver(loginInputSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    try {
      const { email, password } = data;
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }
      navigate("/");
    } catch (err) {
      console.log(err);
    } finally {
      reset();
    }
  };

  const handleClick = () => {
    navigate("/reset_password", { state: { referrer: "login" } });
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
      <AccountTextField
        id="password"
        name="password"
        control={control}
        type="password"
        error={errors.password?.message}
        label="パスワード"
        secondaryLabel="パスワードを入力..."
        icon={<i className="bi bi-lock"></i>}
        disabled={isSubmitting}
      />
      <AccountFormFooter
        disabled={isSubmitting}
        text="ログイン"
        icon={<i className="bi bi-arrow-right"></i>}
        // secondaryText="パスワードを忘れた場合"
        onClick={handleClick}
      />
    </form>
  );
};
