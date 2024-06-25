import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { supabase } from "./../utils/supabaseClient";
import { signUpInputSchema } from "./../types/SignUpFormInput";
import { useState } from "react";

import type { SignUpFormInput } from "./../types/SignUpFormInput";
import type { SubmitHandler } from "react-hook-form";

type User = {
  id: number;
  name: string;
  email: string;
};

export const useSignUpForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<SignUpFormInput>({
    resolver: zodResolver(signUpInputSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<SignUpFormInput> = async (data) => {
    try {
      const { username, email, password } = data;

      // Supabase認証でユーザーを作成
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/welcome`,
        },
      });

      if (authError) throw new Error(authError.message);
      if (!authData.user) throw new Error("User not found after sign up.");

      // userテーブルにデータを挿入
      const { data: userData, error: userError } = await supabase
        .from("user")
        .insert({ name: username, email })
        .select()
        .single<User>();

      if (userError) throw new Error(userError.message);

      postMessage(`User ${userData.name} successfully created!`);

      setError(null);
      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes("Email rate limit exceeded")) {
          alert(
            "メール送信の制限を超えました。しばらくしてから再度お試しください。"
          );
        } else {
          console.error(err);
          setError(err.message);
        }
      } else {
        console.error(err);
        setError("An unknown error occurred");
      }
    } finally {
      reset();
    }
  };

  return {
    handleSubmit: handleSubmit(onSubmit),
    control,
    isSubmitting,
    errors,
    error,
    onmessage,
  };
};

export default useSignUpForm;
