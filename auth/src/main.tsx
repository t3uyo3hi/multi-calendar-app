import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "@supabase/auth-ui-react";
import { supabase } from "../utils/supabase";

ReactDOM.render(
  <AuthProvider supabaseClient={supabase}>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
