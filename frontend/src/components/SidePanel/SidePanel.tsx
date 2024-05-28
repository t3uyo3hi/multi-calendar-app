import React from "react";
import Event from "./Event";
import Todo from "./Todo";
import Cloud from "./Cloud";
import Account from "./Acount";

const CalendarSidePanel = () => {
    return (
        <div className="l_SidePanel ">
            <div className="SidePanel_header d-flex justify-content-around">
                <Cloud />

                <Account />
            </div>
            <div className="SidePanel_body container">
                <Event />
                <Todo />
            </div>
        </div>
    );
};
export default CalendarSidePanel;
