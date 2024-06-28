import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";

export const useLogout = () => {
  const navigate = useNavigate();

  return useCallback(async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw new Error(error.message);
      }
      // ログアウト成功アラート
      alert("ログアウトしました。");
      // 短い遅延を入れてからナビゲート
      setTimeout(() => {
        // 現在のページを再読み込み
        navigate(0);
        // その後、ログインページにリダイレクト
        navigate("/login");
      });
    } catch (err) {
      console.log(err);
    }
  }, [navigate]);
};

export default useLogout;
