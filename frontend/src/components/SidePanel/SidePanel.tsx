import React from "react";
import { Stack, Button } from "react-bootstrap";
// import Event from "./Event";
// import Todo from "./Todo";

const CalendarSidePanel = () => {
    return (
        <div className="l_SidePanel ">
            <div className="SidePanel_header d-flex justify-content-around">
                <div>cloudy icon</div>
                <div>acount </div>
            </div>
            <Stack className="mt-5" gap={3}>
                <Button className="w-75 m-auto" variant="light">
                    <span className="fs-6 ">12:00-14:00</span>
                    <p className="fs-4">ZeloPlus授業</p>
                </Button>
                <Button className="w-75 m-auto" variant="light">
                    <span className="fs-6">14:00-15:00</span>
                    <p className="fs-4">読書</p>
                </Button>
                <Button className="w-75 m-auto" variant="light">
                    <span className="fs-6">16:00-18:00</span>
                    <p className="fs-4">復習課題</p>
                </Button>
                <i className="bi bi-plus-circle"></i>
            </Stack>

            <div className="d-flex justify-content-center mt-5">
                <div>・</div>
                <div>・ </div>
            </div>
        </div>
    );
};
export default CalendarSidePanel;
