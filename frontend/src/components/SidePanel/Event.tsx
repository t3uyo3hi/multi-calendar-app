import React from "react";
import { Stack, Button } from "react-bootstrap";

const Event = () => {
    return (
        <>
            <Stack className="mt-4 mb-4" gap={3}>
                <Button className="w-75 m-auto sidepanel_event" variant="light">
                    <span className="sidepanel_event-time">12:00-14:00</span>
                    <p className="sidepanel_event-ttl">ZeloPlus授業</p>
                </Button>
                <Button className="w-75 m-auto sidepanel_event" variant="light">
                    <span className="sidepanel_event-time">14:00-15:00</span>
                    <p className="sidepanel_event-ttl">読書</p>
                </Button>
                <Button className="w-75 m-auto sidepanel_event" variant="light">
                    <span className="sidepanel_event-time">16:00-18:00</span>
                    <p className="sidepanel_event-ttl">復習課題</p>
                </Button>
                <Button className="w-75 m-auto sidepanel_event" variant="light">
                    <span className="sidepanel_event-time">18:00-19:00</span>
                    <p className="sidepanel_event-ttl">ジム</p>
                </Button>
                <Button className="w-75 m-auto sidepanel_event" variant="light">
                    <span className="sidepanel_event-time">22:00-23:00</span>
                    <p className="sidepanel_event-ttl">予習課題</p>
                </Button>
            </Stack>
        </>
    );
};

export default Event;
