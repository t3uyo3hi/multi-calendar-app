import React from "react";
import Event from "./Event";
import Todo from "./Todo";

const CalendarSidePanel = () => {
    return (
        <div className="l_SidePanel ">
            <div className="SidePanel_header">
                <div>天気のスペース</div>
                <div>アカウントスペース</div>
            </div>
            <Event />
            <Todo />
        </div>
    );
};
export default CalendarSidePanel;
