import React from "react";
import Event from "./Event";
import Todo from "./Todo";

const CalendarSidePanel = () => {
    return (
        <div className="l_SidePanel ">
            <Event />
            <Todo />
        </div>
    );
};
export default CalendarSidePanel;
