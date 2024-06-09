import React, { useState } from "react";
import CalendarHeader from "./components/CalendarHeader";
import DayOfWeekHead from "./components/DayOfWeekHead";
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
    );
};

export default App;
