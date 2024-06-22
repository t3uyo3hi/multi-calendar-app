import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";

const SideBar = () => {
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
    <button
      className="btn btn-danger d-flex align-items-center"
      onClick={onLogout}
    >
      <i className="bi bi-box-arrow-right me-2"></i> ログアウト
    </button>
  );
};

export default SideBar;
