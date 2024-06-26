import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CalendarHeader from "./components/CalendarHeader";
import DayOfWeekHead from "./components/DayOfWeekHead";
import CalendarBody from "./components/CalendarBody";
import SidePanel from "./components/SidePanel/SidePanel";
// import { LoginForm } from "./components/LoginForm";
// import { ResetPasswordPage } from "./components/ResetPasswordPage";
// import SignUpForm from "./components/SignUpForm";
// import { Tab, Nav } from "react-bootstrap";

import "./css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/style.css";

const App: React.FC = () => {
  const [date, setDate] = useState(new Date());
  // const [authPage, setAuthPage] = useState("login");

  return (
    <Router>
      <div className="container p-0 h-100 text-center">
        <div className="row m-0 h-100">
          <div className="col-12 p-0">
            <div className="calendar rounded-4 row m-0 h-100 shadow">
              <div className="calendar_base d-flex flex-row rounded-4 p-0 bg-white">
                <div className="calendar_panel col-8 d-flex justify-content-center align-items-center">
                  <div className="calendar_wrap d-flex flex-column justify-content-center align-items-center w-70 h-80">
                    <CalendarHeader date={date} setDate={setDate} />
                    <div className="calendar_table w-100">
                      <DayOfWeekHead />
                      <CalendarBody date={date} />
                    </div>
                  </div>
                </div>
                    
                <div className="l_SidePanel rounded-end-4 col-4">
                  <SidePanel />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row mt-5">
          <div className="col-12">
            <div className="auth-form p-3 bg-light rounded shadow">
              <Tab.Container
                activeKey={authPage}
                onSelect={(k) => setAuthPage(k!)}
              >
                <Nav variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="login">Login</Nav.Link>
                  </Nav.Item> */}

                  {/* <Nav.Item>
                    <Nav.Link eventKey="reset">Reset Password</Nav.Link>
                  </Nav.Item> */}

                  {/* <Nav.Item>
                    <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content className="mt-3">
                  <Tab.Pane eventKey="login">
                    <LoginForm />
                  </Tab.Pane> */}

                  {/* <Tab.Pane eventKey="reset">
                    <ResetPasswordPage />
                  </Tab.Pane> */}

                  {/* <Tab.Pane eventKey="signup">
                    <SignUpForm />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div> */}

      </div>
    </Router>
  );
};

export default App;
