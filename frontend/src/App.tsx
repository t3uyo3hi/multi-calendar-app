import React, { useState } from "react";
import CalendarHeader from "./components/CalendarHeader";
import CalendarBody from "./components/CalendarBody";
import SidePanel from "./components/SidePanel/SidePanel";

const App = () => {
  const [date] = useState(new Date());

  return (
    <div className="container text-center">
      <div className="calendar row">
        <div className="calendar_base shadow">
          <CalendarHeader />
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
