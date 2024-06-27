import React, { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

interface User {
  email: string;
}

const AccountName = () => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  // 現在ログインしているユーザーを取得する処理
  const getCurrentUser = async () => {
    // ログインのセッションを取得する処理
    const { data: sessionData } = await supabase.auth.getSession();
    // セッションがあるときだけ現在ログインしているユーザーを取得する
    if (sessionData?.session !== null) {
      // supabaseに用意されている現在ログインしているユーザーを取得する関数
      const { data: userData } = await supabase.auth.getUser();
      const user = userData?.user as User | null; // ユーザーが存在しない可能性を考慮
      if (user !== null && user.email !== undefined) {
        // currentUserにユーザーのメールアドレスを格納
        setCurrentUser(user.email);
      } else {
        setCurrentUser(null); // userがnullまたはemailがundefinedの場合
      }
    } else {
      setCurrentUser(null); // セッションが存在しない場合
    }
  };

  // HeaderコンポーネントがレンダリングされたときにgetCurrentUser関数が実行される
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <div style={{ marginTop: "3rem" }}>
      {currentUser ? (
        // サーバーサイドとクライアントサイドでレンダーされる内容が違うときにエラーがでないようにする
        <div suppressHydrationWarning={true}>
          <div>{currentUser}</div>
        </div>
      ) : (
        <div suppressHydrationWarning={true}>ログインしていません。</div>
      )}
    </div>
  );
};

export default AccountName;
