import React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import SidePanelModal from "./CalendarModal";
import Date from "./Date";
import LoginModal from "./LoginModal";

import Event from "./Event";
import Todo from "./Todo";
import AccountName from "./AccountName";

const CalendarSidePanel = () => {
  return (
    <>
      <div className="l_SidePanel rounded-end-4 d-flex flex-column justify-content-between position-relative">
        <div className="SidePanel_header d-flex justify-content-between align-items-center pt-5">
          <div className="d-flex justify-content-start ms-4 mt-2">
            <Date />
          </div>
          <div className="d-flex me-5 mb-4 ">
            <div>
              <LoginModal />
              <AccountName />
            </div>
          </div>
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
            <Nav
              className="mt-3 justify-content-center gap-5"
              variant="underline"
              defaultActiveKey="Event"
            >
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
