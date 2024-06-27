import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { supabase } from "./../utils/supabaseClient";
import { loginInputSchema } from "./../types/LoginFormInput";
import { useState } from "react";

import type { LoginFormInput } from "./../types/LoginFormInput";
import type { SubmitHandler } from "react-hook-form";

export const useLoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

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

      // セッションを取得して確認
      const { data: sessionData, error: sessionError } =
        await supabase.auth.getSession();

      if (sessionError) {
        throw new Error(sessionError.message);
      }

      if (sessionData.session) {
        // ログイン成功アラート
        alert("ログインに成功しました！");

        // 短い遅延を入れてからナビゲート
        setTimeout(() => {
          navigate("/");
        }, 500); // 500ミリ秒（0.5秒）の遅延
      } else {
        throw new Error("セッションの取得に失敗しました");
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error(err);
        setError(err.message);
        // ログイン失敗アラート
        alert(`ログインに失敗しました: ${err.message}`);
      } else {
        console.error(err);
        setError("不明なエラーが発生しました");
        alert("ログインに失敗しました: 不明なエラーが発生しました");
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
  };
};

export default useLoginForm;
