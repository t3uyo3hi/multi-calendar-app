import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import SidePanelModal from "./CalendarModal";
import Account from "./Account";
import Cloud from "./Cloud";
import Event from "./Event";
import Todo from "./Todo";

const CalendarSidePanel = () => {
    return (
        <>
            <BrowserRouter>
                <div className="l_SidePanel">
                    <div className="SidePanel_header d-flex justify-content-around pt-5">
                        <Cloud />
                        <Account />
                    </div>
                    <Routes>
                        <Route path="/" element={<Event />} />
                        <Route path="/todo" element={<Todo />} />
                    </Routes>

                    <SidePanelModal />
                    <div className="d-flex justify-content-center mt-5">
                        <Link to="/">
                            <i className="bi bi-dot fs-2"></i>
                        </Link>
                        <Link to="/Todo">
                            <i className="bi bi-dot fs-2"></i>
                        </Link>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
};
export default CalendarSidePanel;
