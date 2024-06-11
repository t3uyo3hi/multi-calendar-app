import React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import SidePanelModal from "./CalendarModal";
import Account from "./Account";
import Cloud from "./Cloud";
import Event from "./Event";
import Todo from "./Todo";

const CalendarSidePanel = () => {
    return (
        <>
            <div className="l_SidePanel">
                <div className="SidePanel_header d-flex justify-content-around pt-5">
                    <Cloud />
                    <Account />
                </div>
                <div className="mt-5">
                    <Tab.Container defaultActiveKey="Event">
                        <div className="sidepanel_body_container">
                            <Tab.Content>
                                <Tab.Pane eventKey="Event">
                                    <Event />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Todo">
                                    <Todo />
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                        <SidePanelModal />
                        <hr />
                        <Nav className="mt-3 justify-content-center gap-5" variant="underline" defaultActiveKey="Event">
                            <Nav.Item>
                                <Nav.Link eventKey="Event">
                                    <i className="fs-3 bi bi-calendar-event"></i>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Todo">
                                    <i className="fs-3 bi bi-check2-square"></i>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Tab.Container>
                </div>
            </div>
        </>
    );
};
export default CalendarSidePanel;
