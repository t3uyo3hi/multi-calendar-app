// src/types/ResetPasswordFormInput.ts
import { z } from "zod";

export const resetPasswordFormInputSchema = z
  .object({
    password: z.string().min(6, "パスワードは6文字以上である必要があります"),
    passwordConfirmation: z
      .string()
      .min(6, "パスワード確認は6文字以上である必要があります"),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "パスワードが一致しません",
    path: ["passwordConfirmation"],
  });

export type ResetPasswordFormInput = z.infer<
  typeof resetPasswordFormInputSchema
>;
