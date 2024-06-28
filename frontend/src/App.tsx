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
      </div>
    </Router>
  );
};

export default App;
