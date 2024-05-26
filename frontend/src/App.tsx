import React from "react";
import CalendarHeader from "./components/CalendarHeader";
import CalendarBody from "./components/CalendarBody";
import SidePanel from "./components/SidePanel/SidePanel";

const App = () => {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-9">
                    <CalendarHeader />
                    <CalendarBody />
                </div>
                <div className="col-3">
                    <SidePanel />
                </div>
            </div>
        </div>
    );
};

export default App;
