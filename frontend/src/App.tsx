import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CalendarHeader from "./components/CalendarHeader";
import DayOfWeekHead from "./components/DayOfWeekHead";
import CalendarBody from "./components/CalendarBody";
import SidePanel from "./components/SidePanel/SidePanel";

import "./css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/style.css";

const App: React.FC = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Router>
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <div className="calendar row shadow">
              <div className="d-flex flex-row calendar_base">
                <div>
                  <CalendarHeader date={date} setDate={setDate} />
                  <DayOfWeekHead />
                  <CalendarBody date={date} />
                </div>
                <div className="l_SidePanel col-3">
                  <SidePanel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
