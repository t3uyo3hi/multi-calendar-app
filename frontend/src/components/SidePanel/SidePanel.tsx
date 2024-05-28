import React from "react";
import Event from "./Event";
import Todo from "./Todo";

const CalendarSidePanel = () => {
    return (
        <div className="l_SidePanel ">
            <div className="SidePanel_header d-flex justify-content-around">
                <div>cloudy icon</div>
                <div>acount </div>
            </div>
            <div className="SidePanel_body container">
                <Event />
                <Todo />
            </div>
        </div>
    );
};
export default CalendarSidePanel;
