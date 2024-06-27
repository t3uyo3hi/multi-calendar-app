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
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }, [navigate]);
};

export default useLogout;
