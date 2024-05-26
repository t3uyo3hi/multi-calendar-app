import React from "react";
import SidePanel from "./SidePanel/SidePanel";

const CalendarBody = () => {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-8">1 of 2</div>
                <div className="col-4">
                    <SidePanel />
                </div>
            </div>
        </div>
    );
};

// 初回レンダー用フラグ

export default CalendarBody;
