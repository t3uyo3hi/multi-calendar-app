// src/types/LoginFormInput.ts
import { z } from "zod";

// Zodスキーマの定義
export const loginInputSchema = z.object({
  email: z.string().email("有効なメールアドレスを入力してください"),
  password: z.string().min(6, "パスワードは6文字以上である必要があります"),
});

// TypeScriptの型をZodスキーマから生成
export type LoginFormInput = z.infer<typeof loginInputSchema>;
