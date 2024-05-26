import React from "react";
import SidePanel from "./SidePanel/SidePanel";

const CalendarBody = () => {
    return (
        <div className="d-flex flex-row">
            <div className="p-2">
                <div>sidebar content</div>
            </div>
            <div className="p-2">
                <div>body content</div>
            </div>
            <SidePanel />
        </div>
    );
};

// 初回レンダー用フラグ

export default CalendarBody;
