import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { supabase } from "./../utils/supabaseClient";
import { loginInputSchema } from "./../types/LoginFormInput";

import type { LoginFormInput } from "./../types/LoginFormInput";
import type { SubmitHandler } from "react-hook-form";

export const useLoginForm = () => {
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
  return {
    handleSubmit: handleSubmit(onSubmit),
    control,
    isSubmitting,
    errors,
  };
};
export default useLoginForm;
