import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Auth, useAuth } from "@supabase/auth-ui-react";
import { supabase } from "../utils/supabase";
import SignUpForm from "../SignUpForm";
import LoginForm from "../LoginForm";
import ResetPasswordForm from "./ResetPasswordForm";
import ResetPasswordInputForm from "./ResetPasswordInputForm";

import LogoutSidebar from "../LogoutSidebar";
import AccountFormFooter from "./ui-elements/AccountFormFooter";
import AccountTextField from "./ui-elements/AccountTextField";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUpForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/reset-password" component={ResetPasswordForm} />
        <Route
          path="/reset-password-input"
          component={ResetPasswordInputForm}
        />
        <PrivateRoute path="/account" component={AccountFormFooter} />
        <PrivateRoute path="/logout" component={Logout} />
        <PrivateRoute path="/logout-sidebar" component={LogoutSidebar} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
};

export default App;
