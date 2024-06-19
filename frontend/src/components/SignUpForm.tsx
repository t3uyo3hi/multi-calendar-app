import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { AccountFormFooter } from "../ui-elements/AccountFormFooter";
import AccountTextField from "../ui-elements/AccountTextField";
import { supabase } from "./../utils/supabaseClient";
import { signUpInputSchema } from "./../types/SignUpFormInput";

import type { SignUpFormInput } from "./../types/SignUpFormInput";
import type { SubmitHandler } from "react-hook-form";

export const LoginForm = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<SignUpFormInput>({
    resolver: zodResolver(signUpInputSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SignUpFormInput> = async (data) => {
    try {
      const { email, password } = data;
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/welcome`,
        },
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
    navigate("/login", { state: { referrer: "signUp" } });
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
      <AccountTextField
        id="password"
        name="password"
        control={control}
        type="password"
        error={errors.password?.message}
        label="パスワード"
        secondaryLabel="パスワードを入力..."
        icon={<LockOutlinedIcon />}
        disabled={isSubmitting}
      />
      <AccountFormFooter
        disabled={isSubmitting}
        text="サインアップ"
        icon={<ArrowForwardIcon />}
        secondaryText="アカウントを持っている場合"
        onClick={handleClick}
      />
    </Box>
  );
};
