import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "../utils/supabase";

ReactDOM.render(
  <Auth.UserContextProvider supabaseClient={supabase}>
    <App />
  </Auth.UserContextProvider>,
  document.getElementById("root")
);
