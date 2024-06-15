import React, { useState } from "react";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";
import ResetPasswordForm from "../types/ResetPasswordForm";

const App: React.FC = () => {
  const [view, setView] = useState("login"); // "login", "signup", "reset"

  const renderView = () => {
    switch (view) {
      case "signup":
        return <SignUpForm onSwitchView={setView} />;
      case "reset":
        return <ResetPasswordForm onSwitchView={setView} />;
      default:
        return <LoginForm onSwitchView={setView} />;
    }
  };

  return <div>{renderView()}</div>;
};

export default App;
