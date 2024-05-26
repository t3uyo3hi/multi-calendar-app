import React from "react";
import Event from "./Event";
import Todo from "./Todo";

const CalendarSidePanel = () => {
    return (
        <div className="span2">
            <Event />
            <Todo />
        </div>
    );
};
export default CalendarSidePanel;
