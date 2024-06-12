import React from "react";
import { Stack, Button } from "react-bootstrap";

const Event = () => {
    return (
        <>
            <Stack className="mt-5 mb-5" gap={3}>
                <Button className="w-75 m-auto" variant="light">
                    <span className="">12:00-14:00</span>
                    <p className="">ZeloPlus授業</p>
                </Button>
                <Button className="w-75 m-auto" variant="light">
                    <span className="">14:00-15:00</span>
                    <p className="fs-4">読書</p>
                </Button>
                <Button className="w-75 m-auto" variant="light">
                    <span className="">16:00-18:00</span>
                    <p className="">復習課題</p>
                </Button>
            </Stack>
        </>
    );
};

export default Event;
