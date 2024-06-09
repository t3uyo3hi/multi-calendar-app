import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import SidePanelModal from "./CalendarModal";
import Event from "./Event";
import Todo from "./Todo";

const CalendarSidePanel = () => {
    return (
        <>
            <BrowserRouter>
                <div className="l_SidePanel">
                    <div className="SidePanel_header d-flex justify-content-around pt-5">
                        <div>
                            <div className="d-flex fs-4 gap-2">
                                <p>5/8</p>
                                <i className="bi bi-cloud"></i>
                            </div>
                            <span>WednesDay</span>
                        </div>
                        <div>
                            <div className="fs-4">
                                <i className="bi bi-person-circle"></i>
                            </div>
                            <div className="mt-3">Account</div>
                        </div>
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
