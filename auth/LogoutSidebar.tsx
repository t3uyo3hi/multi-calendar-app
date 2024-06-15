import { Logout } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { supabase } from "./utils/supabase";

const LogoutSideBar = () => {
  const navigate = useNavigate();

  const onLogout = useCallback(async () => {
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

  return (
    <Button
      color="error"
      variant="text"
      startIcon={<Logout />}
      onClick={onLogout}
    >
      ログアウト
    </Button>
  );
};

export default LogoutSideBar;
