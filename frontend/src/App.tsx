import React, { useState } from "react";
import CalendarHeader from "./components/CalendarHeader";
import CalendarBody from "./components/CalendarBody";
import SidePanel from "./components/SidePanel/SidePanel";

import "./css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/style.css";

const App = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="container text-center">
      <div className="calendar row">
        <div className="calendar_base shadow">
          <CalendarHeader date={date} setDate={setDate} />
          <CalendarBody date={date} />

          <div className="col-3 l_SidePanel shadow">
            <SidePanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
